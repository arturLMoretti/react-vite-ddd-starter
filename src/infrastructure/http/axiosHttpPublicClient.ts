import axios, { AxiosError, AxiosResponse } from "axios";
import { HttpClient, HttpRequest, HttpResponse } from "../protocols/http/httpClient";

export class AxiosHttpPublicClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
      })
    } catch (error) {
      axiosResponse = ((error as AxiosError).response || {
        status: 500,
        data: {
          error: 'Unexpected error'
        }
      }) as AxiosResponse;
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse?.data || {}
    }
  }
}