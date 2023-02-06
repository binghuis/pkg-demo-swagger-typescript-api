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

export type AddPetResponse = Pet;

export interface Address {
  /** @example "Palo Alto" */
  city?: string;
  /** @example "CA" */
  state?: string;
  /** @example "437 Lytton" */
  street?: string;
  /** @example "94301" */
  zip?: string;
}

export interface ApiResponse {
  /** @format int32 */
  code?: number;
  message?: string;
  type?: string;
}

export interface Category {
  /**
   * @format int64
   * @example 1
   */
  id?: number;
  /** @example "Dogs" */
  name?: string;
}

export type CreateUserResponse = User;

export type CreateUsersWithListInputPayload = User[];

export type CreateUsersWithListInputResponse = User;

export interface Customer {
  address?: Address[];
  /**
   * @format int64
   * @example 100000
   */
  id?: number;
  /** @example "fehguy" */
  username?: string;
}

export interface FindPetsByStatusParams {
  /**
   * Status values that need to be considered for filter
   * @default "available"
   */
  status?: FindPetsByStatusParamsStatus;
}

export type FindPetsByStatusResponse = Pet[];

export interface FindPetsByTagsParams {
  /** Tags to filter by */
  tags?: string[];
}

export type FindPetsByTagsResponse = Pet[];

export type GetInventoryResponse = Record<string, number>;

export type GetOrderByIdResponse = Order;

export type GetPetByIdResponse = Pet;

export type GetUserByNameResponse = User;

export interface LoginUserParams {
  /** The user name for login */
  username?: string;
  /** The password for login in clear text */
  password?: string;
}

export type LoginUserResponse = string;

export type LogoutUserResponse = any;

export interface Order {
  complete?: boolean;
  /**
   * @format int64
   * @example 10
   */
  id?: number;
  /**
   * @format int64
   * @example 198772
   */
  petId?: number;
  /**
   * @format int32
   * @example 7
   */
  quantity?: number;
  /** @format date-time */
  shipDate?: string;
  /**
   * Order Status
   * @example "approved"
   */
  status?: OrderStatus;
}

export interface Pet {
  category?: Category;
  /**
   * @format int64
   * @example 10
   */
  id?: number;
  /** @example "doggie" */
  name: string;
  photoUrls: string[];
  /** pet status in the store */
  status?: PetStatus;
  tags?: Tag[];
}

export type PlaceOrderResponse = Order;

export interface Tag {
  /** @format int64 */
  id?: number;
  name?: string;
}

export type UpdatePetResponse = Pet;

export interface UpdatePetWithFormParams {
  /** Name of pet that needs to be updated */
  name?: string;
  /** Status of pet that needs to be updated */
  status?: string;
  /**
   * ID of pet that needs to be updated
   * @format int64
   */
  petId: number;
}

export type UpdateUserResponse = any;

export interface UploadFileParams {
  /** Additional Metadata */
  additionalMetadata?: string;
  /**
   * ID of pet to update
   * @format int64
   */
  petId: number;
}

/** @format binary */
export type UploadFilePayload = File;

export type UploadFileResponse = ApiResponse;

export interface User {
  /** @example "john@email.com" */
  email?: string;
  /** @example "John" */
  firstName?: string;
  /**
   * @format int64
   * @example 10
   */
  id?: number;
  /** @example "James" */
  lastName?: string;
  /** @example "12345" */
  password?: string;
  /** @example "12345" */
  phone?: string;
  /**
   * User Status
   * @format int32
   * @example 1
   */
  userStatus?: number;
  /** @example "theUser" */
  username?: string;
}

/**
 * Order Status
 * @example "approved"
 */
export type OrderStatus = "placed" | "approved" | "delivered";

/** pet status in the store */
export type PetStatus = "available" | "pending" | "sold";

/**
 * Status values that need to be considered for filter
 * @default "available"
 */
export type StatusStatus = "available" | "pending" | "sold";
