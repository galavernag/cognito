"use client";
import { usePathname } from "next/navigation";
import { PiGridFourBold, PiTestTube, PiUsers, PiGear } from "react-icons/pi";

export function Subheader({ slug }: { slug: string }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="flex gap-3 px-32 items-center border-b border-zinc-800 pb-4">
      <a
        data-primary={pathname === `/schools/${slug}`}
        href={`/schools/${slug}`}
        className="flex items-center gap-2 text-xs font-medium w-fit px-3 py-1 rounded-full cursor-pointer bg-zinc-950 data-[primary=true]:bg-zinc-800"
      >
        <PiGridFourBold />
        <span>Dashboard</span>
      </a>

      <a
        data-primary={pathname === `/schools/${slug}/tests`}
        href={`${slug}/tests`}
        className="flex items-center gap-2 text-xs font-medium w-fit px-3 py-1 rounded-full cursor-pointer bg-zinc-950 data-[primary=true]:bg-zinc-800"
      >
        <PiTestTube />
        <span>Avaliações</span>
      </a>

      <a
        data-primary={pathname === `/schools/${slug}/students`}
        href={`${slug}/students`}
        className="flex items-center gap-2 text-xs font-medium w-fit px-3 py-1 rounded-full cursor-pointer bg-zinc-950 data-[primary=true]:bg-zinc-800"
      >
        <PiUsers />
        <span>Alunos</span>
      </a>

      {/* Only admin */}
      <a
        data-primary={pathname === `/schools/${slug}/settings`}
        href={`${slug}/settings`}
        className="flex items-center gap-2 text-xs font-medium w-fit px-3 py-1 rounded-full cursor-pointer bg-zinc-950 data-[primary=true]:bg-zinc-800"
      >
        <PiGear />
        <span>Configurações</span>
      </a>
    </header>
  );
}
