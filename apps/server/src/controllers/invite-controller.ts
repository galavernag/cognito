import { InviteService } from "@cognito/services";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export class InviteController {
  private inviteService: InviteService;

  constructor(inviteServiceInstance: InviteService) {
    this.inviteService = inviteServiceInstance;
  }

  async createInvite(request: FastifyRequest, reply: FastifyReply) {
    try {
      const createInviteBodySchema = z.object({
        schoolId: z.string().uuid(),
        expiresAt: z.string(),
      });

      const { schoolId, expiresAt } = createInviteBodySchema.parse(
        request.body
      );
      const userId = z.string().parse(request.userId);

      const response = await this.inviteService.createInvite(
        userId,
        schoolId,
        new Date(expiresAt)
      );

      if (response.error) {
        return reply.status(400).send({ error: response.error });
      }
      return reply
        .status(201)
        .send({ message: "Created invite", invite: response.invite });
    } catch (error: any) {
      console.log(error);
      return reply.status(500).send({ error: error.message });
    }
  }

  async useInvite(request: FastifyRequest, reply: FastifyReply) {
    try {
      const useInviteParamsSchema = z.object({
        code: z.string().cuid(),
      });

      const { code } = useInviteParamsSchema.parse(request.params);
      const userId = z.string().parse(request.userId);

      const response = await this.inviteService.useInvite(userId, code);

      if (response.error) {
        return reply.status(400).send({ error: response.error });
      }
      return reply.status(201).send({ message: response.message });
    } catch (error: any) {
      console.log(error);
      return reply.status(500).send({ error: error.message });
    }
  }

  async revokeInvite(request: FastifyRequest, reply: FastifyReply) {
    try {
      const revokeInviteParamsSchema = z.object({
        code: z.string().cuid(),
      });

      const { code } = revokeInviteParamsSchema.parse(request.params);

      const response = await this.inviteService.revokeInvite(code);

      if (response.error) {
        return reply.status(400).send({ error: response.error });
      }
      return reply.status(201).send({ message: response.message });
    } catch (error: any) {
      console.log(error);
      return reply.status(500).send({ error: error.message });
    }
  }
}
