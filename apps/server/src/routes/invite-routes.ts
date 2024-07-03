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
}
