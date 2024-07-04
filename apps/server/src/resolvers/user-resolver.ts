import { BcryptService, JwtService, UserService } from "@cognito/services";
import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../dtos/models/user-model";
import {
  CreateUserInput,
  UpdateUserInput,
  UserLoginInput,
} from "../dtos/inputs/user";

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
  @Authorized()
  async privateInfo(@Arg("id", type => String) id: string) {
    const response = await this.userService.getUserById(id);

    if (response.user) {
      return {
        ...response.user,
      };
    }
  }

  @Query(() => User)
  async login(@Arg("data", type => UserLoginInput) data: UserLoginInput) {
    const response = await this.userService.login(data.email, data.password);

    if (response.user) {
      return {
        ...response.user,
        token: response.token,
      };
    }
  }

  @Mutation(() => User)
  async register(@Arg("data", type => CreateUserInput) data: CreateUserInput) {
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

  @Mutation(() => User)
  async updateUser(
    @Arg("data", type => UpdateUserInput) data: UpdateUserInput
  ) {
    const response = await this.userService.updateUser({ ...data });

    if (response.user) {
      return {
        ...response.user,
      };
    }
  }
}
