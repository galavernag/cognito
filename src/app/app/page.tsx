import { list_schools } from "@/actions/school/list-schools";
import { Header } from "@/components/header";
import { SchoolGrid } from "@/components/school-grid";
import { cookies } from "next/headers";
import { JoinInSchoolButton } from "./_components/JoinInSchoolButton";
import { Suspense } from "react";

export default async function Home() {
  const userId = cookies().get("cognito.userId")?.value!;
  const schools = await list_schools(userId);

  const numberOfRegisteredSchools = schools?.length ? schools.length : 0;

  return (
    <main className="px-32 py-10">
      <Header />

      <section className="grid grid-cols-[1fr_0.7fr] gap-10 mt-10">
        <div className="flex flex-col space-y-10">
          <header className="flex items-center gap-10">
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-bold text-zinc-50">Escolas</h2>
              <span className="text-zinc-600">
                Total de escolas: {numberOfRegisteredSchools}
              </span>
            </div>

            <JoinInSchoolButton userId={userId} />
          </header>

          {!schools ? (
            <span>Você não está registrado em nenhuma escola.</span>
          ) : (
            <Suspense>
              <SchoolGrid schools={schools} />
            </Suspense>
          )}
        </div>
        <aside>
          <h3 className="text-md text-zinc-300">Atividade recente</h3>
        </aside>
      </section>
    </main>
  );
}
