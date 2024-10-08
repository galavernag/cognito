"use client";

import { Button } from "@/components/ui/button";
import { Student } from "@/types/Student";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ActionCell = ({ id }: { id: string }) => {
  const pathname = usePathname();
  const href = `${pathname}/${id}`;

  return (
    <Link href={href}>
      <Button variant="outline" size="icon">
        <ChevronRightIcon />
      </Button>
    </Link>
  );
};

export const columns: ColumnDef<Student>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row }) => {
      const id = row.getValue("id") as string;
      return <ActionCell id={id} />;
    },
  },
];
