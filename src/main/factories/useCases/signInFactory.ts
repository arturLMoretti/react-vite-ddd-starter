import { SignIn } from '@/domain/useCases/signIn';
import { RemoteSignIn } from '@/application/useCases/signIn';
import { makeAxiosHttpPublicClient } from '../http/axiosHttpPublicClientFactory';

export const makeRemoteSignIn = (): SignIn => {
  return new RemoteSignIn('http://localhost:3000/signin', makeAxiosHttpPublicClient());
};