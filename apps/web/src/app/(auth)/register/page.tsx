import { Button } from "@/components/ui/button";
import { RegisterForm } from "../_components/RegisterForm";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const cookiesStore = cookies();
  const token = cookiesStore.get("cognito.token");

  if (token) {
    redirect("/overview");
  }
  return (
    <aside className="p-5 flex flex-col items-center justify-between">
      <header className="self-end">
        <Button variant="link">
          <Link href="/login">Fazer login</Link>
        </Button>
      </header>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-3 pb-5">
          <h2 className="text-2xl font-bold">Registre-se</h2>
          <span className="text-zinc-500">
            Registre-se com os serviços que estão listados abaixo
          </span>
        </div>
        <div className="w-full pt-5 border-t">
          <RegisterForm />
        </div>
      </div>
      <footer className="max-w-md text-center text-zinc-500 text-sm mt-5">
        <p>
          Ao fazer o registro, você concorda com os nossos{" "}
          <u>Termos de Serviço</u>e a nossa <u>Política de Privacidade</u>.
        </p>
      </footer>
    </aside>
  );
}
