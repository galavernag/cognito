import { students } from "@/lib/data";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

export default function StudentsPage({ params }: { params: { slug: string } }) {
  return (
    <section className="px-32 mt-8 space-y-10">
      <h2 className="font-bold text-2xl">Alunos</h2>
      <DataTable columns={columns} data={students} />
    </section>
  );
}
