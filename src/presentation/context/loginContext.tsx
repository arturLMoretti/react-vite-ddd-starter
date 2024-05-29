import { LoginContext, LoginUseCases } from "./useLoginContext";

type Props = {
  value: LoginUseCases;
}

export function LoginProvider({ children, value }: React.PropsWithChildren<Props>) {
  return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
}
