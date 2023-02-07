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

import { FindPetsByStatusParams, FindPetsByStatusResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Pet<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Multiple status values can be provided with comma separated strings
   *
   * @tags pet
   * @name FindPetsByStatus
   * @summary Finds Pets by status
   * @request GET:/pet/findByStatus
   * @secure
   * @response `200` `FindPetsByStatusResponse` successful operation
   * @response `400` `void` Invalid status value
   */
  findPetsByStatus = (query: FindPetsByStatusParams, params: RequestParams = {}) =>
    this.http.request<FindPetsByStatusResponse, void>({
      path: `/pet/findByStatus`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
