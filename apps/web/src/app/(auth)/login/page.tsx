import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  return (
    <aside className="p-5 flex flex-col items-center justify-between">
      <header className="self-end">
        <Button variant="link">
          <Link href="/register">Fazer registro</Link>
        </Button>
      </header>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-3 pb-5">
          <h2 className="text-2xl font-bold">Entrar</h2>
          <span className="text-zinc-500">
            Entre com os serviços que estão listados abaixo
          </span>
        </div>
        <div className="w-full pt-5 border-t">
          <Button variant="outline" className="w-full flex items-center gap-2">
            <FaGoogle />
            Entrar com o Google
          </Button>
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
