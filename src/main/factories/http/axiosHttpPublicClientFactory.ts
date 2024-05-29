import { AxiosHttpPublicClient } from "@/infrastructure/http/axiosHttpPublicClient";

export const makeAxiosHttpPublicClient = (): AxiosHttpPublicClient => new AxiosHttpPublicClient()