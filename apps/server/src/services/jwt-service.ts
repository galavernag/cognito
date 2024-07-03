import { TokenService } from "@/interfaces/token-service.interface";
import jwt from "jsonwebtoken";

export class JwtService implements TokenService {
  sign(
    payload: string | object | Buffer,
    secretOrPrivateKey: string,
    options?: any
  ): string {
    const signed = jwt.sign(payload, secretOrPrivateKey, options);
    return signed;
  }
  verify(
    token: string,
    secretOrPublicKey: string,
    options?: any
  ): string | object {
    const decoded = jwt.verify(token, secretOrPublicKey, options);
    return decoded;
  }
}
