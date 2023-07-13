/* eslint-disable */
import { Driver } from "./message";

export const protobufPackage = "driver";

export interface ListDriversRequest {
  /** The parent resource name, for example, "shelves/shelf1" */
  parent?:
    | string
    | undefined;
  /** The maximum number of items to return. */
  pageSize?:
    | number
    | undefined;
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string | undefined;
}

export interface ListDriversResponse {
  /**
   * The field name should match the noun "Driver" in the method name.
   * There will be a maximum number of items returned based on the page_size field in the request.
   */
  drivers?:
    | Driver[]
    | undefined;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string | undefined;
}

export interface GetDriverRequest {
  /** The field will contain name of the resource requested. */
  name?: string | undefined;
}

export interface GetDriverResponse {
  driver?: Driver | undefined;
}

export interface CreateDriverRequest {
  /** The parent resource name where the Driver is to be created. */
  parent?:
    | string
    | undefined;
  /** The Driver id to use for this Driver. */
  driverId?:
    | string
    | undefined;
  /**
   * The Driver resource to create.
   * The field name should match the Noun in the method name.
   */
  driver?: Driver | undefined;
}

export interface CreateDriverResponse {
  driver?: Driver | undefined;
}

export interface UpdateDriverRequest {
  /** The Driver resource which replaces the resource on the server. */
  driver?: Driver | undefined;
}

export interface UpdateDriverResponse {
  driver?: Driver | undefined;
}

export interface DeleteDriverRequest {
  /** The resource name of the Driver to be deleted. */
  name?: string | undefined;
}

export interface DeleteDriverResponse {
  driver?: Driver | undefined;
}

export const DRIVER_PACKAGE_NAME = "driver";
