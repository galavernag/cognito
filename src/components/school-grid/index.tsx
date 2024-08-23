import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { PropsWithChildren } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { School, Student, User } from "@prisma/client";

interface SchoolGridProps {
  schools: Array<School & { students: Student[]; users: User[] }>;
}

interface SchoolGridItemProps {
  title: string;
  id: string;
  amountOfStudents: number;
  amountOfTeachers: number;
  lastActivity: {
    by: {
      name: string;
      avatar: string;
    };
    action: string;
  };
}

export function SchoolGridItem({
  title,
  id,
  amountOfStudents,
  amountOfTeachers,
  lastActivity,
}: SchoolGridItemProps) {
  const firstName = lastActivity.by.name.split(" ")[0];

  return (
    <div className="border-[1px] rounded-md border-zinc-800">
      <header className="flex p-5 bg-[#18181B]/20 justify-between items-start">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="text-sm flex items-center gap-2 text-zinc-600">
            <span>{amountOfStudents} alunos</span>
            <span className="block size-1 bg-zinc-600 rounded-full"></span>
            <span>{amountOfTeachers} professores</span>
          </div>
        </div>
        <Link href={`/app/schools/${id}/dashboard`}>
          <Button variant="outline" size="icon">
            <ArrowRightIcon className="size-4" />
          </Button>
        </Link>
      </header>

      <footer className="flex items-center gap-1 border-t text-xs px-5 py-3">
        <div className="flex items-center gap-2">
          <Avatar className="size-3">
            <AvatarImage src={lastActivity.by.avatar} />
          </Avatar>
          <span className="text-zinc-600">
            <span>
              <span className="text-zinc-50 font-medium">{firstName}</span>{" "}
              <u>{lastActivity.action.toLowerCase()}</u>
            </span>
          </span>
        </div>
      </footer>
    </div>
  );
}

export function SchoolGrid({ schools }: SchoolGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {schools.map((school) => {
        return (
          <SchoolGridItem
            key={school.id}
            id={school.id}
            title={school.name}
            amountOfStudents={school.students.length}
            amountOfTeachers={school.users.length}
            lastActivity={{
              action: "",
              by: {
                avatar: "",
                name: "Guilherme",
              },
            }}
          />
        );
      })}
    </div>
  );
}
