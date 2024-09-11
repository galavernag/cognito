import CognitoLogo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <main className="max-w-[1680px] mx-auto mt-10">
      <header className="flex items-center justify-between">
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

        <Button>Entrar</Button>
      </header>
    </main>
  );
}
