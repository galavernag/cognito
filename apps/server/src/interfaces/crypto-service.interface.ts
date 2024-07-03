export interface CryptoInterface {
  hash(password: string, secret: number | string): Promise<string>;
  compare(password: string, hash: string): Promise<boolean>;
}
