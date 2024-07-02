import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="px-32 py-10">
      <Header />

      <section className="flex flex-col mt-10">
        <header className="flex items-center gap-10">
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold text-zinc-50">Escolas</h2>
            <span className="text-zinc-600">Total de escolas: 10</span>
          </div>

          <Button
            variant="badge"
            size="badge"
            className="flex items-center gap-2"
          >
            <PlusIcon className="size-4" />
            Adicionar uma nova escola
          </Button>
        </header>
      </section>
    </main>
  );
}
