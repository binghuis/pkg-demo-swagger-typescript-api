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

export interface ApiResponse {
  /** @format int32 */
  code?: number;
  message?: string;
  type?: string;
}

export interface Category {
  /** @format int64 */
  id?: number;
  name?: string;
}

export type CreateUserResponse = any;

export type CreateUsersWithArrayInputResponse = any;

export type CreateUsersWithListInputResponse = any;

export interface FindPetsByStatusParams {
  /** Status values that need to be considered for filter */
  status: StatusStatus[];
}

export type FindPetsByStatusResponse = any[];

export interface FindPetsByTagsParams {
  /** Tags to filter by */
  tags: string[];
}

export type FindPetsByTagsResponse = any[];

export type GetInventoryResponse = Record<string, number>;

export type GetOrderByIdResponse = Order;

export type GetPetByIdResponse = any;

export type GetUserByNameResponse = any;

export interface LoginUserParams {
  /** The user name for login */
  username: string;
  /** The password for login in clear text */
  password: string;
}

export type LoginUserResponse = string;

export type LogoutUserResponse = any;

export interface Order {
  complete?: boolean;
  /** @format int64 */
  id?: number;
  /** @format int64 */
  petId?: number;
  /** @format int32 */
  quantity?: number;
  /** @format date-time */
  shipDate?: string;
  /** Order Status */
  status?: OrderStatus;
}

export type PlaceOrderResponse = Order;

export interface Tag {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface UpdatePetWithFormPayload {
  /** Updated name of the pet */
  name?: string;
  /** Updated status of the pet */
  status?: string;
}

export interface UploadFilePayload {
  /** Additional data to pass to server */
  additionalMetadata?: string;
  /** file to upload */
  file?: File;
}

export type UploadFileResponse = ApiResponse;

/** Order Status */
export enum OrderStatus {
  Placed = "placed",
  Approved = "approved",
  Delivered = "delivered",
}

/** @default "available" */
export enum StatusStatus {
  Available = "available",
  Pending = "pending",
  Sold = "sold",
}
