export interface TokenService {
  sign(
    payload: string | object | Buffer,
    secretOrPrivateKey: string,
    options?: any
  ): string;
  verify(
    token: string,
    secretOrPublicKey: string,
    options?: any
  ): string | object;
}
