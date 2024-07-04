import { StandaloneServerContextFunctionArgument } from "@apollo/server/standalone";
import { User } from "@cognito/database";
import { BcryptService, JwtService, UserService } from "@cognito/services";

export interface ContextData {
  user?: User | null;
}

export async function context({
  req,
  res,
}: StandaloneServerContextFunctionArgument) {
  const token = req.headers.authorization;

  if (!token) {
    return {
      error: "No token provided",
    };
  }

  if (!prisma) {
    return {
      error: "Prisma client not initialized",
    };
  }

  const cryptoService = new BcryptService();
  const tokenService = new JwtService();
  const userService = new UserService(prisma, tokenService, cryptoService);

  const decoded = tokenService.verify(token, process.env.JWT_SECRET!);

  if (!decoded) {
    return {
      error: "Invalid token",
    };
  }

  const { userId } = decoded as unknown as { userId: string };

  const { user, error } = await userService.getUserById(userId);

  if (error) {
    return {
      error: "Invalid token",
    };
  }

  return {
    user,
  };
}
