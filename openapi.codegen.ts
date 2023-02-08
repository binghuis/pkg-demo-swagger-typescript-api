import pkg from "swagger-typescript-api";
const { generateApi, generateTemplates } = pkg;
import path from "path";

const URL = "http:";
const INPUT = "./src/openapi/spec.json";
const OUTPUT = "./src/openapi/__service__";
const TEMPLATES = "./src/openapi/templates";
const SOURCEPLATES = "./src/openapi/source-templates";

/* NOTE: all fields are optional expect one of `output`, `url`, `spec` */
generateApi({
  output: path.resolve(process.cwd(), OUTPUT),
  templates: path.resolve(process.cwd(), TEMPLATES),
  generateUnionEnums: false,
  // 当 modular 为真时，注意类型名不能与文件同名
  modular: true,
  // url: URL,
  input: path.resolve(process.cwd(), INPUT),
  httpClientType: "axios",
  defaultResponseAsSuccess: true,
  unwrapResponseData: true,
  generateClient: true,
  sortTypes: true,
  generateResponses: true,
  moduleNameIndex: 0,
  moduleNameFirstTag: false,
  extractRequestParams: true,
  extractRequestBody: true,
  extractEnums: true,
  extractResponseBody: true,
  extractResponseError: true,
  prettier: {
    printWidth: 120,
    tabWidth: 2,
    trailingComma: "all",
    parser: "typescript",
  },
  defaultResponseType: "void",
  singleHttpClient: true,
  cleanOutput: true,
  enumNamesAsValues: false,
  typePrefix: "",
  typeSuffix: "",
  enumKeyPrefix: "",
  enumKeySuffix: "",
  addReadonly: false,
  extractingOptions: {
    requestBodySuffix: ["Payload"],
    requestParamsSuffix: ["Params"],
    responseBodySuffix: ["Response"],
    responseErrorSuffix: ["Error"],
  },
  /** allow to generate extra files based with this extra templates, see more below */
  // extraTemplates: [],
  fixInvalidTypeNamePrefix: "Type",
  fixInvalidEnumKeyPrefix: "Value",
  hooks:{

  }
});

// generateTemplates({
//   cleanOutput: true,
//   output: path.resolve(process.cwd(), SOURCEPLATES),
//   httpClientType: "axios",
//   modular: true,
//   silent: false,
// });
