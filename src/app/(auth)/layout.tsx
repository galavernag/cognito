import { PropsWithChildren } from "react";
import Image from "next/image";
import CognitoLogo from "@/assets/logo.svg";
import Link from "next/link";

export default function AuthRootLayout({ children }: PropsWithChildren) {
  return (
    <section className="w-screen h-screen grid grid-cols-2">
      <aside className="bg-zinc-900 border-r pt-10 pl-[120px]">
        <header>
          <Link href="/">
            <div className="flex items-center gap-3">
              <Image
                src={CognitoLogo}
                className="size-8"
                alt="Logo do Cognito"
              />
              <span className="text-xl font-bold text-zinc-50">Cognito</span>
            </div>
          </Link>
        </header>
      </aside>
      {children}
    </section>
  );
}
