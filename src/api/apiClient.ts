import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

const axiosClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
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
      'Content-Type': 'application/json',
      'Host': ''
    }
  });
  return response.data;
};

interface ApiClient {
  post<T>(endpoint: string, data?: object): Promise<T>;
}

export const apiClient: ApiClient = {

  async post<T>(endpoint: string, data?: object): Promise<T> {
    return await fetch(endpoint,
      {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      },
    );
  },
}
