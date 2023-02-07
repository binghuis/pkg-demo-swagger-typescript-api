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

export interface FindPetsByStatusParams {
  /**
   * Status values that need to be considered for filter
   * @default "available"
   */
  status?: FindPetsByStatusParamsStatus;
}

export type FindPetsByStatusResponse = any;

export enum StatusStatus {
  Available = "available",
  Pending = "pending",
  Sold = "sold",
}
