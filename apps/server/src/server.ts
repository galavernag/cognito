import "reflect-metadata";
import "@cognito/database";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import path from "node:path";
import { UserResolver } from "./resolvers/user-resolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    validate: true,
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server);

  console.log(`🔥 Server is running at ${url}`);
}

bootstrap();
