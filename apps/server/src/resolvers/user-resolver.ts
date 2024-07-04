import { BcryptService, JwtService, UserService } from "@cognito/services";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../dtos/models/user-model";
import { CreateUserInput } from "../dtos/inputs/create-user-input";

@Resolver()
export class UserResolver {
  private userService: UserService;

  constructor() {
    const tokenService = new JwtService();
    const cryptoService = new BcryptService();

    if (!global.prisma) {
      throw new Error("Prisma client not initialized");
    }

    this.userService = new UserService(
      global.prisma,
      tokenService,
      cryptoService
    );
  }

  @Query(() => [User])
  async users() {
    return this.userService.getUsers();
  }

  @Mutation(() => User)
  async user(@Arg("data", type => CreateUserInput) data: CreateUserInput) {
    const response = await this.userService.createUser(
      data.name,
      data.email,
      data.password
    );

    if (response.user) {
      return {
        ...response.user,
        token: response.token,
      };
    }
  }
}
