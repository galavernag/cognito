"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import NextLink from "next/link";

function Link({ title, href }: { title: string; href: string }) {
  const pathname = usePathname();
  const isActive = pathname.includes(href);

  return (
    <li>
      <NextLink href={href}>
        <Button
          data-primary={isActive}
          className="w-full justify-start data-[primary=true]:text-zinc-50"
          variant="ghost"
        >
          {title}
        </Button>
      </NextLink>
    </li>
  );
}
export function SettingsList() {
  return (
    <aside className="space-y-3">
      <span className="text-sm font-medium">Configurações</span>
      <ul className="text-zinc-600 space-y-3 border-t border-t-zinc-900 pt-3">
        <Link href="general" title="Geral" />
        <Link href="billing" title="Pagamento" />
      </ul>
    </aside>
  );
}
