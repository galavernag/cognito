import { $Enums } from "@cognito/database";
import { Field, ID, InputType, registerEnumType } from "type-graphql";

// registerEnumType(Roles, {
//   name: "Role",
//   description: "User roles",
// });

const Roles = Object.keys($Enums.Role).map((role, i) => {
  return Object.defineProperty($Enums.Role, role, {
    value: i,
    enumerable: true,
  });
})[0];

registerEnumType(Roles, {
  name: "Role",
  description: "User roles",
});

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
  @Field(type => String, { nullable: true })
  name: string;

  @Field(type => String, { nullable: true })
  email: string;

  @Field(type => String, { nullable: true })
  password: string;

  @Field(type => [Roles], { nullable: true })
  roles: $Enums.Role[];
}
