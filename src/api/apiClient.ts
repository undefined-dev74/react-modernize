import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "localhost:5173/",
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // Modify request config as needed
    // For example, you can add headers or authentication tokens
    // before the request is sent

    // Add headers or other modifications to the config
    // config.headers = { ... };

    return config;
  },
  (error: any): Promise<any> => {
    // Handle request error

    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    // Modify response data as needed
    // For example, you can extract and transform the data
    // before it is passed to the calling code

    // Transform the response data if necessary
    // response.data = { ... };

    return response;
  },
  (error: any): Promise<any> => {
    // Handle response error

    return Promise.reject(error);
  },
);

export { apiClient };
