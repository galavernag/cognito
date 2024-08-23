"use client";

import { join_in_school } from "@/actions/school/join-in-school";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { PlusIcon } from "@radix-ui/react-icons";
import { FormEvent, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { toast } from "sonner";

export function JoinInSchoolButton({ userId }: { userId: string }) {
  const [inviteCode, setInviteCode] = useState<string>();
  async function handleJoinInSchoolButton(event: FormEvent) {
    event.preventDefault();

    console.log(inviteCode);
    if (!inviteCode) {
      return;
    }

    try {
      await join_in_school(inviteCode, userId);
      toast.success("Código utilizado com sucesso.");
    } catch (error: any) {
      toast.error("Houve um erro ao tentar usar o código.", {
        description: error.message,
      });
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="badge"
          size="badge"
          className="flex items-center gap-2"
        >
          <PlusIcon className="size-4" />
          <span>Adicionar uma nova escola</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Entrar em uma escola</DialogTitle>
          <DialogDescription>
            Insira o código de convite recebido pelo administrador da escola.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleJoinInSchoolButton}>
          <div className="flex items-end gap-3">
            <div className="space-y-3 w-full">
              <Label htmlFor="invite-code">Código de convite</Label>
              <Input
                name="invite-code"
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value)}
                placeholder="434b7fe9-5139-42c2-8102-b47ede56a4f5"
                required
              />
            </div>
            <Button
              type="submit"
              variant="badge"
              className="rounded-sm "
              size="icon"
            >
              <FaArrowRight />
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
