import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

const axiosClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
});

type RequestMethod = AxiosRequestConfig["method"];

const performRequest = async <T>(
  method: RequestMethod,
  url: string,
  data?: object
): Promise<T> => {
  const response = await axiosClient({
    url,
    data,
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};

interface ApiClient {
  post<T>(endpoint: string, data?: object): Promise<T>;
}

export const apiClient: ApiClient = {

  post<T>(endpoint: string, data?: object): Promise<T> {
    return performRequest("post", endpoint, data);
  },
}
