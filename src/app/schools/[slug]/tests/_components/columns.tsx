"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Test } from "@/types/Test";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

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
    accessorKey: "assignedto",
    header: "Atribuído a",

    cell: ({ row }) => {
      const classes = row.getValue("assignedto") as string[];

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

      const firstName = data.name.split(" ")[0];
      const avatar = data.avatar;

      return (
        <div className="flex items-center gap-3 text-sm">
          <Avatar className="size-6">
            <AvatarImage src={avatar} alt={firstName}></AvatarImage>
            <AvatarFallback>{firstName.charAt(0)}</AvatarFallback>
          </Avatar>
          <span>{firstName}</span>
        </div>
      );
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
