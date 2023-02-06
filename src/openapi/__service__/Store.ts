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

import { GetInventoryResponse, GetOrderByIdResponse, Order, PlaceOrderResponse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Store<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns a map of status codes to quantities
   *
   * @tags store
   * @name GetInventory
   * @summary Returns pet inventories by status
   * @request GET:/store/inventory
   * @secure
   * @response `200` `GetInventoryResponse` successful operation
   */
  getInventory = (params: RequestParams = {}) =>
    this.http.request<GetInventoryResponse, any>({
      path: `/store/inventory`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description Place a new order in the store
   *
   * @tags store
   * @name PlaceOrder
   * @summary Place an order for a pet
   * @request POST:/store/order
   * @response `200` `PlaceOrderResponse` successful operation
   * @response `405` `void` Invalid input
   */
  placeOrder = (data: Order, params: RequestParams = {}) =>
    this.http.request<PlaceOrderResponse, void>({
      path: `/store/order`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
   *
   * @tags store
   * @name GetOrderById
   * @summary Find purchase order by ID
   * @request GET:/store/order/{orderId}
   * @response `200` `GetOrderByIdResponse` successful operation
   * @response `400` `void` Invalid ID supplied
   * @response `404` `void` Order not found
   */
  getOrderById = (orderId: number, params: RequestParams = {}) =>
    this.http.request<GetOrderByIdResponse, void>({
      path: `/store/order/${orderId}`,
      method: "GET",
      ...params,
    });
  /**
   * @description For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
   *
   * @tags store
   * @name DeleteOrder
   * @summary Delete purchase order by ID
   * @request DELETE:/store/order/{orderId}
   * @response `400` `void` Invalid ID supplied
   * @response `404` `void` Order not found
   */
  deleteOrder = (orderId: number, params: RequestParams = {}) =>
    this.http.request<any, void>({
      path: `/store/order/${orderId}`,
      method: "DELETE",
      ...params,
    });
}
