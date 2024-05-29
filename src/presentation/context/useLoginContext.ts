import { makeRemoteSignIn } from "@/main/factories/useCases/signInFactory";
import { createContext, useContext } from "react";

export const loginUseCases = {
  signIn: makeRemoteSignIn
}

export type LoginUseCases = typeof loginUseCases;

export const LoginContext = createContext(loginUseCases);

export const useLoginContext = () => useContext(LoginContext);