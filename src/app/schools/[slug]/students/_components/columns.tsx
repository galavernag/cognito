"use client";

import { Button } from "@/components/ui/button";
import { Student } from "@/types/Student";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    accessorKey: "assignedTo",
    header: "Turmas",

    cell: ({ row }) => {
      const classes = row.getValue("assignedTo") as string[];

      return classes.map(schoolClass => {
        return (
          <span className="bg-zinc-900 py-1 px-2 rounded-md font-medium text-xs mr-2">
            {schoolClass}
          </span>
        );
      });
    },
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row }) => {
      const pathname = usePathname();
      const id = row.getValue("id") as string;
      const href = `${pathname}/${id}`;

      return (
        <Link href={href}>
          <Button variant="outline" size="icon">
            <ChevronRightIcon />
          </Button>
        </Link>
      );
    },
  },
];
