// @ts-nocheck
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { list_students } from "@/actions/students/list-students";

export default async function StudentsPage({
  params,
}: {
  params: { id: string };
}) {
  const students = await list_students(params.id);

  return (
    <section className="px-32 mt-8 space-y-10">
      <h2 className="font-bold text-2xl">Alunos</h2>
      <DataTable columns={columns} data={students} />
    </section>
  );
}
