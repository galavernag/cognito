import { PrismaClient } from "@cognito/database";
import { z } from "zod";

import { TokenService } from "@/interfaces/token-service.interface";
import { CryptoService } from "@/interfaces/crypto-service.interface";

export default class AuthService {
  private prisma: PrismaClient;
  private tokenService: TokenService;
  private cryptoService: CryptoService;

  private cryptoSalt = process.env.BCRYPT_SALT!;
  private tokenSecret = process.env.JWT_SECRET!;

  constructor(prisma: PrismaClient, jwt: TokenService, bcrypt: CryptoService) {
    this.prisma = prisma;

    this.tokenService = jwt;
    this.cryptoService = bcrypt;
  }

  async login(email: string, password: string) {
    const data = { email, password };

    try {
      const loginBodySchema = z.object({
        email: z.string().email(),
        password: z.string(),
      });

      const { email, password } = loginBodySchema.parse(data);
      const user = await this.prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        return {
          message: "User not found",
        };
      }

      const passwordMatch = await this.cryptoService.compare(
        password,
        user.password
      );

      if (!passwordMatch) {
        return {
          message: "Password is incorrect",
        };
      }

      const token = this.tokenService.sign(
        { userId: user.id },
        this.tokenSecret,
        {
          expiresIn: "7d",
        }
      );

      return {
        token,
      };
    } catch (error: any) {
      return { error: error.message };
    }
  }

  async register(name: string, email: string, password: string) {
    const data = { name, email, password };
    try {
      const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
      });

      const { name, email, password } = registerBodySchema.parse(data);
      const user = await this.prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (user) {
        return {
          message: "User already exists",
        };
      }

      const hashedPassword = await this.cryptoService.hash(
        password,
        this.cryptoSalt
      );
      const newUser = await this.prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });
      const token = this.tokenService.sign(
        { userId: newUser.id },
        this.tokenSecret,
        {
          expiresIn: "7d",
        }
      );
      return {
        token,
      };
    } catch (error: any) {
      return { error: error.message };
    }
  }
}
