/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  CreateUserResponse,
  CreateUsersWithListInputPayload,
  CreateUsersWithListInputResponse,
  GetUserByNameResponse,
  LoginUserParams,
  LoginUserResponse,
  LogoutUserResponse,
  UpdateUserResponse,
  User,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class User<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name CreateUser
   * @summary Create user
   * @request POST:/user
   * @response `default` `CreateUserResponse` successful operation
   */
  createUser = (data: User, params: RequestParams = {}) =>
    this.http.request<CreateUserResponse, any>({
      path: `/user`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Creates list of users with given input array
   *
   * @tags user
   * @name CreateUsersWithListInput
   * @summary Creates list of users with given input array
   * @request POST:/user/createWithList
   * @response `200` `CreateUsersWithListInputResponse` Successful operation
   * @response `default` `void` successful operation
   */
  createUsersWithListInput = (data: CreateUsersWithListInputPayload, params: RequestParams = {}) =>
    this.http.request<CreateUsersWithListInputResponse, any>({
      path: `/user/createWithList`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name LoginUser
   * @summary Logs user into the system
   * @request GET:/user/login
   * @response `200` `LoginUserResponse` successful operation
   * @response `400` `void` Invalid username/password supplied
   */
  loginUser = (query: LoginUserParams, params: RequestParams = {}) =>
    this.http.request<LoginUserResponse, void>({
      path: `/user/login`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name LogoutUser
   * @summary Logs out current logged in user session
   * @request GET:/user/logout
   * @response `default` `LogoutUserResponse` successful operation
   */
  logoutUser = (params: RequestParams = {}) =>
    this.http.request<LogoutUserResponse, any>({
      path: `/user/logout`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name GetUserByName
   * @summary Get user by user name
   * @request GET:/user/{username}
   * @response `200` `GetUserByNameResponse` successful operation
   * @response `400` `void` Invalid username supplied
   * @response `404` `void` User not found
   */
  getUserByName = (username: string, params: RequestParams = {}) =>
    this.http.request<GetUserByNameResponse, void>({
      path: `/user/${username}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name UpdateUser
   * @summary Update user
   * @request PUT:/user/{username}
   * @response `default` `UpdateUserResponse` successful operation
   */
  updateUser = (username: string, data: User, params: RequestParams = {}) =>
    this.http.request<UpdateUserResponse, any>({
      path: `/user/${username}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name DeleteUser
   * @summary Delete user
   * @request DELETE:/user/{username}
   * @response `400` `void` Invalid username supplied
   * @response `404` `void` User not found
   */
  deleteUser = (username: string, params: RequestParams = {}) =>
    this.http.request<any, void>({
      path: `/user/${username}`,
      method: "DELETE",
      ...params,
    });
}
