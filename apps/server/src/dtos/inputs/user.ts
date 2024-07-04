import { Field, InputType } from "type-graphql";

@InputType()
export class UserLoginInput {
  @Field(type => String)
  email: string;

  @Field(type => String)
  password: string;
}

@InputType()
export class CreateUserInput {
  @Field(type => String)
  name: string;

  @Field(type => String)
  email: string;

  @Field(type => String)
  password: string;
}

@InputType()
export class UpdateUserInput {
  @Field(type => String)
  name: string;

  @Field(type => String)
  email: string;

  @Field(type => String)
  password: string;
}
