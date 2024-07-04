import { BcryptService, JwtService, UserService } from "@cognito/services";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../dtos/models/user-model";
import {
  CreateUserInput,
  UpdateUserInput,
  UserLoginInput,
} from "../dtos/inputs/user";
import { GraphQLError } from "graphql";

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

  @Query(() => User)
  async getUser(@Arg("id", type => String) id: string) {
    const response = await this.userService.getUserById(id);

    if (!response.user) {
      throw new GraphQLError("User not found", {
        extensions: {
          code: "NOT_FOUND",
        },
      });
    }

    return response.user;
  }

  @Mutation(() => User)
  async createUser(
    @Arg(`data`, type => CreateUserInput) data: CreateUserInput
  ) {
    const response = await this.userService.createUser(
      data.name,
      data.email,
      data.password
    );

    if (response.error) {
      throw new GraphQLError(response.error.message, {
        extensions: {
          code: "BAD_REQUEST",
        },
      });
    }

    return {
      ...response.user,
      token: response.token,
    };
  }
}
