import { Arg, Query, Resolver } from "type-graphql";

@Resolver()
export class UserResolver {
  @Query(() => [String])
  async users() {
    return ["asd"];
  }

  @Query(() => String)
  async user(@Arg("id", type => String) id: string) {
    return id;
  }
}
