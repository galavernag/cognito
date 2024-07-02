import { Header } from "@/components/header";
import { SchoolGrid, SchoolGridItem } from "@/components/school-grid";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PlusIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="px-32 py-10">
      <Header />

      <section className="grid grid-cols-[1fr_0.7fr] gap-10 mt-10">
        <div className="flex flex-col">
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

          <SchoolGrid>
            <SchoolGridItem
              title="Escola 1"
              amountOfStudents={200}
              amountOfTeachers={300}
              lastActivity={{
                by: {
                  name: "Guilherme Galaverna",
                  avatar: "https://github.com/galavernag.png",
                },
                action: "Criou uma nova avaliação",
              }}
              slug="escola-1"
            />

            <SchoolGridItem
              title="Escola 2"
              amountOfStudents={200}
              amountOfTeachers={300}
              lastActivity={{
                by: {
                  name: "Guilherme Galaverna",
                  avatar: "https://github.com/galavernag.png",
                },
                action: "Criou uma nova avaliação",
              }}
              slug="escola-1"
            />

            <SchoolGridItem
              title="Escola 3"
              amountOfStudents={200}
              amountOfTeachers={300}
              lastActivity={{
                by: {
                  name: "Guilherme Galaverna",
                  avatar: "https://github.com/galavernag.png",
                },
                action: "Criou uma nova avaliação",
              }}
              slug="escola-1"
            />

            <SchoolGridItem
              title="Escola 4"
              amountOfStudents={200}
              amountOfTeachers={300}
              lastActivity={{
                by: {
                  name: "Guilherme Galaverna",
                  avatar: "https://github.com/galavernag.png",
                },
                action: "Criou uma nova avaliação",
              }}
              slug="escola-1"
            />

            <SchoolGridItem
              title="Escola 5"
              amountOfStudents={200}
              amountOfTeachers={300}
              lastActivity={{
                by: {
                  name: "Guilherme Galaverna",
                  avatar: "https://github.com/galavernag.png",
                },
                action: "Criou uma nova avaliação",
              }}
              slug="escola-1"
            />

            <SchoolGridItem
              title="Escola 6"
              amountOfStudents={200}
              amountOfTeachers={300}
              lastActivity={{
                by: {
                  name: "Guilherme Galaverna",
                  avatar: "https://github.com/galavernag.png",
                },
                action: "Criou uma nova avaliação",
              }}
              slug="escola-1"
            />
          </SchoolGrid>
        </div>
        <aside>
          <h3 className="text-md text-zinc-300">Atividade recente</h3>
        </aside>
      </section>
    </main>
  );
}
