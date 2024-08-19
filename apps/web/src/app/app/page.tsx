import { list_schools } from "@/actions/list-schools";
import { Header } from "@/components/header";
import { SchoolGrid, SchoolGridItem } from "@/components/school-grid";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { cookies } from "next/headers";

export default async function Home() {
  const userId = await cookies().get("cognito.userId")?.value!;
  const schools = await list_schools(userId);
  console.log(schools);
  return (
    <main className="px-32 py-10">
      <Header />

      <section className="grid grid-cols-[1fr_0.7fr] gap-10 mt-10">
        <div className="flex flex-col space-y-10">
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

          {schools ? (
            <SchoolGrid>
              {schools.map((school) => (
                <SchoolGridItem
                  key={school.id}
                  title={school.name}
                  amountOfStudents={school.students.length}
                  amountOfTeachers={school.users.length}
                  lastActivity={{
                    by: {
                      name: "a",
                      avatar: "",
                    },
                    action: "",
                  }}
                  slug={school.name.toLowerCase().replaceAll(" ", "-")}
                />
              ))}
            </SchoolGrid>
          ) : (
            <div className="bg-neutral-900/50 p-5 w-[400px] opacity-50 rounded-md border border-dashed space-y-2">
              <span className="text-sm leading-tight">
                Você não está em nenhuma escola.
              </span>
            </div>
          )}
        </div>
        <aside>
          <h3 className="text-md text-zinc-300">Atividade recente</h3>
        </aside>
      </section>
    </main>
  );
}
