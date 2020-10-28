import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
});

type RequestMethod = AxiosRequestConfig["method"];

const performAuthenticatedRequest = async <T>(
  method: RequestMethod,
  url: string,
  data?: object
): Promise<T> => {
  const response = await apiClient({
    url,
    data,
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};

export const adminClient: AdminApiClient = {
  get<T>(endpoint: string): Promise<T> {
    return performAuthenticatedRequest("get", endpoint);
  },

  post<T>(endpoint: string, data?: object): Promise<T> {
    return performAuthenticatedRequest("post", endpoint, data);
  },
