"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Test } from "@/types/Test";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AssignedToCell = ({ classes }: { classes: string[] }) => (
  <div>
    {classes.map((schoolClass) => (
      <span
        key={schoolClass.toLowerCase()}
        className="bg-zinc-900 py-1 px-2 rounded-md font-medium text-xs mr-2"
      >
        {schoolClass}
      </span>
    ))}
  </div>
);

const CreatedByCell = ({
  data,
}: {
  data: { name: string; avatar: string };
}) => {
  const firstName = data.name.split(" ")[0];
  return (
    <div className="flex items-center gap-3 text-sm">
      <Avatar className="size-6">
        <AvatarImage src={data.avatar} alt={firstName} />
        <AvatarFallback>{firstName.charAt(0)}</AvatarFallback>
      </Avatar>
      <span>{firstName}</span>
    </div>
  );
};

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

export const columns: ColumnDef<Test>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Título",
  },
  {
    accessorKey: "assignedTo",
    header: "Atribuído a",
    cell: ({ row }) => {
      const classes = row.getValue("assignedTo") as string[];
      return <AssignedToCell classes={classes} />;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Criado em",
  },
  {
    accessorKey: "createdBy",
    header: "Criado por",
    cell: ({ row }) => {
      const data = row.getValue("createdBy") as {
        name: string;
        avatar: string;
      };
      return <CreatedByCell data={data} />;
    },
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
