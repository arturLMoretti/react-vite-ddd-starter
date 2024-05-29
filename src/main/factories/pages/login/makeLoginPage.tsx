import { LoginProvider } from "@/presentation/context/loginContext";
import { loginUseCases } from "@/presentation/context/useLoginContext";
import LoginPage from "@/presentation/pages/login";

export const makeLoginPage = () => {
  return (
    <LoginProvider value={loginUseCases}>
      <LoginPage />
    </LoginProvider>
  );
}