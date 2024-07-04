import { TokenInterface } from "@cognito/interfaces";
import jwt, { Jwt } from "jsonwebtoken";

export class JwtService implements TokenInterface {
  sign(
    payload: string | object | Buffer,
    secretOrPrivateKey: string,
    options?: any
  ): string {
    const signed = jwt.sign(payload, secretOrPrivateKey, options);
    return signed;
  }
  verify(token: string, secretOrPublicKey: string, options?: any): Jwt {
    const decoded = jwt.verify(token, secretOrPublicKey, options);
    return decoded;
  }
}
