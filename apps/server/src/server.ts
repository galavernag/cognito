import Fastify from "fastify";

import authRoutes from "@/routes/auth-routes";
import schoolRoutes from "./routes/school-routes";

const port = 3333;
const server = Fastify({
  logger: false,
});

server.register(authRoutes);
server.register(schoolRoutes);

server.listen({ port }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  console.log(`Server in running at ${address}`);
});
