"use client";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { PiGridFourBold, PiTestTube, PiUsers, PiGear } from "react-icons/pi";

interface LinkProps {
  href: string;
  icon: ReactNode;
  title: string;
}

function Link({ href, icon, title }: LinkProps) {
  const pathname = usePathname();
  const resource = href.split("/");

  const isActive = pathname.includes(resource[3]);

  return (
    <NextLink
      data-primary={isActive}
      href={href}
      className="flex items-center gap-2 text-xs font-medium w-fit px-3 py-1 rounded-full cursor-pointer bg-zinc-950 data-[primary=true]:bg-zinc-800"
    >
      {icon}
      <span>{title}</span>
    </NextLink>
  );
}

export function Subheader({ slug }: { slug: string }) {
  return (
    <header className="flex gap-3 px-32 items-center border-b border-zinc-800 pb-4">
      <Link
        href={`/schools/${slug}/dashboard`}
        icon={<PiGridFourBold />}
        title="Dashboard"
      />
      <Link
        href={`/schools/${slug}/tests`}
        icon={<PiTestTube />}
        title="Avaliaçoes"
      />
      <Link
        href={`/schools/${slug}/students`}
        icon={<PiUsers />}
        title="Alunos"
      />
      <Link
        href={`/schools/${slug}/settings/general`}
        icon={<PiGear />}
        title="Configurações"
      />
    </header>
  );
}
