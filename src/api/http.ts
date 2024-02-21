import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const instance = axios.create({
  baseURL: "http://110.234.18.211:8080",
  headers: {
    "content-type": "application/json",
    Authorization: ``,
  },
});

export interface Response<T> {
  success: boolean;
  data: T;
  error: {
    code: string;
    message: string;
  } | null;
}

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export const HTTP = {
  get: <ResponseType>(url: string): Promise<AxiosResponse<ResponseType>> => instance.get(url),
  post: <ParamType, ResponseType>(
    url: string,
    param?: ParamType,
    config?: AxiosRequestConfig<ParamType>
  ): Promise<AxiosResponse<ResponseType>> => instance.post(url, param, config),
};
