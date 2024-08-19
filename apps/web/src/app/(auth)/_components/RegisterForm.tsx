"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { register } from "@/actions/register";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { getCookies, setCookie } from "cookies-next";

export function RegisterForm() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    try {
      const response = await register({ name, email, password });

      toast.success("Usuário registrado com sucesso.");
      setCookie("cognito.token", response.token);
    } catch (error) {
      toast.error("Ocorreu um erro ao realizar o registro.");
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleRegister}>
      <div className="space-y-3">
        <Label htmlFor="name">Nome Completo</Label>
        <Input
          name="name"
          type="text"
          required
          placeholder="Albert Einstein"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

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

      <Button className="w-full">Registrar</Button>
    </form>
  );
}
