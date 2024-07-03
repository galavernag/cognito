import { PropsWithChildren } from "react";
import Image from "next/image";
import CognitoLogo from "@/assets/logo.svg";

export default function AuthRootLayout({ children }: PropsWithChildren) {
  return (
    <section className="w-screen h-screen grid grid-cols-2">
      <aside className="bg-zinc-900 border-r p-5">
        <header>
          <div className="flex items-center gap-3">
            <Image src={CognitoLogo} alt="Logo Cognito" width={40} />
            <span className="text-xl font-bold text-zinc-50">Cognito</span>
          </div>
        </header>
      </aside>
      {children}
    </section>
  );
}
