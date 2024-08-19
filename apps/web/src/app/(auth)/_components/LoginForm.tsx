"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/actions/login";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { setCookie } from "cookies-next";

export function LoginForm() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    try {
      const response = await login({ email, password });

      toast.success("Login realizado com sucesso.");
    } catch (error) {
      toast.error("Ocorreu um erro ao realizar o registro.");
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleRegister}>
      <div className="space-y-3">
        <Label htmlFor="email">E-mail</Label>
        <Input
          name="email"
          type="email"
          required
          placeholder="einstein@physics.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="space-y-3">
        <Label htmlFor="password">Senha</Label>
        <Input
          name="password"
          type="password"
          required
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button className="w-full">Entrar</Button>
    </form>
  );
}
