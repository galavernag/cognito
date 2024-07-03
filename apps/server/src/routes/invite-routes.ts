import { InviteController } from "@/controllers/invite-controller";
import { auth } from "@/middlewares/auth";
import { FastifyInstance } from "fastify";

export default async function (fastify: FastifyInstance, options: object) {
  const inviteController = new InviteController();

  fastify.post(
    "/invite/create",
    { preHandler: auth },
    inviteController.createInvite
  );

  fastify.put(
    "/invite/:code/use",
    { preHandler: auth },
    inviteController.useInvite
  );

  fastify.put(
    "/invite/:code/revoke",
    { preHandler: auth },
    inviteController.revokeInvite
  );
}
