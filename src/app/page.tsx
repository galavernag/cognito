import CognitoLogo from "@/assets/logo.svg";
import CognitoScreenshot from "@/assets/cognito-screenshot.png";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Syne } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const syne = Syne({ subsets: ["latin"] });

export default function Landing() {
  return (
    <main className="max-w-[1680px] mx-auto mt-10 flex flex-col items-center">
      <header className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <Image src={CognitoLogo} className="size-8" alt="Logo do Cognito" />
          <span className="text-xl font-bold text-zinc-50">Cognito</span>
        </div>

        <nav>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Início
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Preços
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="space-x-5">
          <Link href="/login">
            <Button>Entrar</Button>
          </Link>
          <Link href="/register">
            <Button variant="secondary">Cadastrar-se</Button>
          </Link>
        </div>
      </header>

      <section className="mt-32 text-center space-y-10">
        <Badge className="w-auto py-1.5" variant="outline">
          Lançamento da versão v0.1
        </Badge>
        <h1
          className={cn(
            syne.className,
            "text-5xl text-center font-semibold leading-tight"
          )}
        >
          Eleve a experiência da gestão <br />
          de avaliações na sua escola.
        </h1>
        <p className="text-lg text-zinc-700">
          Facilite a gestão de avalições na sua escola com uma aplicação que faz{" "}
          <br />
          todo o processo difícil para você.
        </p>

        <Image
          className="border rounded-lg w-[1000px]"
          src={CognitoScreenshot}
          alt="Captura de tela do painel do Cognito"
        />
      </section>
    </main>
  );
}
