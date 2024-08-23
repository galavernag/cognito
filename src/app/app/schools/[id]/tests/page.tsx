import { tests } from "@/lib/data";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

export default function TestsPage({ params }: { params: { slug: string } }) {
  return (
    <section className="px-32 mt-8">
      <h2 className="font-bold text-2xl">Avaliações</h2>
      <DataTable columns={columns} data={tests} />
    </section>
  );
}
