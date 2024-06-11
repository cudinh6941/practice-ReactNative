export interface BaseResponseModel {
    status?: boolean;
    msg?: string;
  }
  
  export interface DataResponseModel<T> {
    status?: boolean;
    msg?: string;
    data?: T;
  }
  
  export interface ListResponseModel<T> {
    status?: boolean;
    message?: string;
    data?: T[];
  }