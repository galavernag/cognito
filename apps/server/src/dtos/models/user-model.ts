import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field(type => ID)
  id: string;

  @Field(type => String)
  name: string;

  @Field(type => String)
  email: string;

  @Field(type => String, { nullable: true })
  token: string;
}
