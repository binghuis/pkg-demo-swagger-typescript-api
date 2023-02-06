import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import chalk from "chalk";
import { getReasonPhrase, StatusCodes } from "http-status-codes";
import { BaseResponse } from "./type";
import { Store } from "./__service__/Store";
import { HttpClient } from "./__service__/http-client";

const axReqConfig: AxiosRequestConfig = {
  // 自定义 url vite 环境变量
  baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  // withCredentials: true,
  validateStatus: (status) => {
    if (status > StatusCodes.BAD_REQUEST) {
      if (status === StatusCodes.UNAUTHORIZED) {
        // What is “401 Error Unauthorized Access” and How to Fix it?
        // https://www.siteground.com/kb/error-401/
        // 异常统一报错
      } else {
        // 异常统一报错
      }
    }
    return status >= StatusCodes.OK && status < StatusCodes.MULTIPLE_CHOICES;
  },
  paramsSerializer:{
    serialize: (params) => {
        return new URLSearchParams(params).toString();
      },
  }
};

const client = new HttpClient(axReqConfig);

interface IPendingVal {
  controller: AbortController;
  time: number; // ms
}
type IPending = Record<string, IPendingVal>;

class DuplicateRequestsController {
  private pending: IPending;
  private expire: number;
  constructor() {
    this.pending = {};
    /** 接口最大超时时间（毫秒） */
    this.expire = 2000;
  }
  hasPending = (key: string) => this.pending[key];
  addPending = (key: string, controller: AbortController) => {
    this.pending = Object.entries(this.pending).reduce(
      (acc: IPending, [key, val]) => {
        const duration = Date.now() - val.time;
        if (duration < this.expire) {
          acc[key] = val;
        }
        return acc;
      },
      {}
    );
    if (this.hasPending(key)) {
      console.warn(`接口 ${key} 短时间内重复请求，本次请求被忽略`);
      controller.abort();
    } else {
      this.pending[key] = {
        controller: controller,
        time: Date.now(),
      };
    }
  };

  /** 删除当前请求记录 */
  removePending = (key: string) => {
    Reflect.deleteProperty(this.pending, key);
  };

  /** 短时间内重复请求只保留最后一次，其余中断 */
  /** 生成一个由url，method和data组成的字符串请求key */
  genRequestKey = (
    config: AxiosRequestConfig,
    flag?: "request" | "response"
  ) => {
    if (!config) {
      return `${+new Date()}`.valueOf();
    }
    const uri = axios.getUri(config);
    if (!import.meta.env.PROD) {
      console.log(
        chalk.green(`${flag} ${config.method?.toUpperCase()} ${uri}`)
      );
    }
    return config.method?.toLocaleUpperCase() + uri;
  };
}

const duplicateRequestsController = new DuplicateRequestsController();

client.instance.interceptors.request.use(
  (c) => {
    if (c.headers) {
      // headers 加 token
    }
    const controller = new AbortController();
    const key = duplicateRequestsController.genRequestKey(c, "request");
    duplicateRequestsController.addPending(key, controller);
    return { ...c, signal: controller.signal };
  },
  function (error) {
    return Promise.reject(error);
  }
);

client.instance.interceptors.response.use(
  (res: AxiosResponse<BaseResponse>) => {
    const key = duplicateRequestsController.genRequestKey(
      { ...res.config },
      "response"
    );
    duplicateRequestsController.removePending(key);
    const resData = res.data;

    if (resData.code !== "SUCCESS") {
      if (resData.message) {
        // 处理业务失败情况
      }
    }
    // 需要返回完整 response 给 openapi codegen
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);


const openapi = new Store(client);

export { openapi };
