import { Header } from "@/components/header";
import { Subheader } from "@/components/subheader";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { tests } from "@/lib/data";
import { AvatarImage } from "@radix-ui/react-avatar";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import {
  PiGear,
  PiGridFourBold,
  PiPlus,
  PiTestTube,
  PiUsers,
} from "react-icons/pi";

export default function School({ params }: { params: { slug: string } }) {
  return (
    <section className="px-32 mt-8 space-y-10">
      <div className="grid grid-cols-3 gap-10">
        <div className="border-[1px] rounded-md border-zinc-800">
          <header className="flex p-5 bg-[#18181B]/20 justify-between items-start">
            <div className="space-y-2">
              <h3 className="text-sm font-regular">Avaliações pendentes</h3>
              <span className="text-2xl font-medium">300</span>
            </div>
          </header>
        </div>

        <div className="border-[1px] rounded-md border-zinc-800">
          <header className="flex p-5 bg-[#18181B]/20 justify-between items-start">
            <div className="space-y-2">
              <h3 className="text-sm font-regular">Avaliações finalizadas</h3>
              <span className="text-2xl font-medium">300</span>
            </div>
          </header>
        </div>
        <div className="border-[1px] rounded-md border-zinc-800">
          <header className="flex p-5 bg-[#18181B]/20 justify-between items-start">
            <div className="space-y-2">
              <h3 className="text-sm font-regular">Avaliações pendentes</h3>
              <span className="text-2xl font-medium">300</span>
            </div>
          </header>
        </div>
      </div>

      <header className="flex flex-col gap-3 w-min">
        <div className="flex items-center gap-6">
          <h2 className="text-xl font-medium">Avaliações</h2>
          <Button variant="badge" size="badge">
            <PiPlus />
            Adicionar uma nova avaliação
          </Button>
        </div>
        <div>
          <Input
            className="rounded- border-dashed border-zinc-600"
            placeholder="Pesquisar avaliação..."
          />
        </div>
      </header>

      <Table className="mt-5">
        <TableCaption>A lista das suas avaliações</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Título</TableHead>
            <TableHead className="w-[600px]">Atribuído a</TableHead>
            <TableHead>Criador por</TableHead>
            <TableHead>Ação</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tests.map(test => (
            <TableRow key={test.id}>
              <TableCell className="font-medium">{test.id}</TableCell>
              <TableCell>{test.title}</TableCell>
              <TableCell>
                <div className="flex gap-3 flex-wrap">
                  {test.assignedTo.map(schoolClass => (
                    <span className="bg-zinc-900 py-1 px-2 rounded-md font-medium text-xs">
                      {schoolClass}
                    </span>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3 text-sm">
                  <Avatar className="size-5">
                    <AvatarImage src={test.createdBy.avatar} />
                  </Avatar>
                  <span>{test.createdBy.name}</span>
                </div>
              </TableCell>
              <TableCell>
                <Button size="icon" variant="outline">
                  <ChevronRightIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
