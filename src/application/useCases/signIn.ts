import { SignIn } from "@/domain/useCases/signIn";
import { HttpClient, HttpStatusCode } from "@/infrastructure/protocols/http/httpClient";

export class RemoteSignIn implements SignIn {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async execute(email: string, password: string): Promise<void> {
    const response = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: { email, password }
    });
    
    switch (response.statusCode) {
      case HttpStatusCode.serverError: throw new Error('Server error');
      default: return response.body;
    }
  }
}