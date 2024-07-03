import { CryptoService } from "@/interfaces/crypto-service.interface";
import bcrypt from "bcrypt";

export class BcryptService implements CryptoService {
  async hash(password: string, secret: number | string): Promise<string> {
    const rounds = Number(secret);
    const salt = await bcrypt.genSalt(rounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }
  async compare(password: string, hash: string): Promise<boolean> {
    const passwordMatch = await bcrypt.compare(password, hash);
    return passwordMatch;
  }
}
