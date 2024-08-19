import { Header } from "@/components/header";
import { SchoolGrid, SchoolGridItem } from "@/components/school-grid";
import { Button } from "@/components/ui/button";
import { schools } from "@/lib/data";
import { PlusIcon } from "@radix-ui/react-icons";

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
              <span>Adicionar uma nova escola</span>
            </Button>
          </header>

          <SchoolGrid>
            {schools.map((school) => (
              <SchoolGridItem
                key={school.slug}
                title={school.name}
                amountOfStudents={school.amountOfStudents}
                amountOfTeachers={school.amountOfTeacher}
                lastActivity={school.lastActivity}
                slug={school.slug}
              />
            ))}
          </SchoolGrid>
        </div>
        <aside>
          <h3 className="text-md text-zinc-300">Atividade recente</h3>
        </aside>
      </section>
    </main>
  );
}
