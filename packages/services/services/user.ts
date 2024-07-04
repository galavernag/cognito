import { PrismaClient } from "@cognito/database";
import { TokenInterface, CryptoInterface } from "@cognito/interfaces";

export class UserService {
  private prisma: PrismaClient;
  private tokenService: TokenInterface;
  private cryptoService: CryptoInterface;

  private cryptoSalt = process.env.BCRYPT_SALT!;
  private tokenSecret = process.env.JWT_SECRET!;

  constructor(
    prisma: PrismaClient,
    jwt: TokenInterface,
    bcrypt: CryptoInterface
  ) {
    this.prisma = prisma;

    this.tokenService = jwt;
    this.cryptoService = bcrypt;
  }

  async login(email: string, password: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        return {
          error: "User not found",
        };
      }

      const passwordMatch = await this.cryptoService.compare(
        password,
        user.password
      );

      if (!passwordMatch) {
        return {
          error: "Password is incorrect",
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
        user,
        token,
      };
    } catch (error: any) {
      return { error: error.message };
    }
  }

  async getUsers() {
    try {
      const users = await this.prisma.user.findMany();
      return users;
    } catch (error: any) {
      return { error: error.message };
    }
  }

  async createUser(name: string, email: string, password: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (user) {
        return {
          error: "User already exists",
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
        user: newUser,
        token,
      };
    } catch (error: any) {
      return { error: error.message };
    }
  }

  async updateUser(data: any) {
    try {
      return {
        user: { name: "Not implemented" },
      };
    } catch (error: any) {
      return { error: error.message };
    }
  }

  async getUserById(id: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id,
        },
      });

      if (!user) {
        return {
          error: "User not found",
        };
      }

      return { user };
    } catch (error: any) {
      return { error: error.message };
    }
  }
}
