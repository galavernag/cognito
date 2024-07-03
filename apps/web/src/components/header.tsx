"use client";
import Image from "next/image";
import CognitoLogo from "@/assets/logo.svg";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export function Header() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(path => path !== "");

  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Image width={30} src={CognitoLogo} alt="Logo Cognito" />
          <span className="font-medium text-zinc-300">Cognito</span>
        </Link>

        <span className="text-md text-zinc-800 select-none">/</span>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Overview</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {paths.length > 0 && <BreadcrumbSeparator />}
            {paths.map((path, index) => {
              const href = `/${paths.slice(0, index + 1).join("/")}`;
              const linkName = path.charAt(0).toUpperCase() + path.slice(1);
              const isLastPath = paths.length === index + 1;

              return (
                <Fragment key={path}>
                  <BreadcrumbItem>
                    {!isLastPath ? (
                      <BreadcrumbLink asChild>
                        <Link href={href}>{linkName.replace("-", " ")}</Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{linkName}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {paths.length !== index + 1 && <BreadcrumbSeparator />}
                </Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </nav>

      <div className="flex items-center gap-6">
        <div className="flex flex-col text-sm">
          <span className="text-zinc-400">Guilherme Galaverna</span>
          <span className="text-zinc-600">guigalaverna@gmail.com</span>
        </div>
        <Avatar>
          <AvatarFallback>GG</AvatarFallback>
          <AvatarImage src="https://github.com/galavernag.png" />
        </Avatar>
      </div>
    </header>
  );
}
