export type HttpMethod = 'post' | 'get' | 'put' | 'delete' | 'patch';

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
};

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body?: T
}

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>;
}

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  badRequest = 400,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}
