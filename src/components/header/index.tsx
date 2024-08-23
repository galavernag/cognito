import Image from "next/image";
import CognitoLogo from "@/assets/logo.svg";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { cookies } from "next/headers";
import { get_user } from "@/actions/user/get-user";

export async function Header() {
  const userId = cookies().get("cognito.userId")?.value!;
  const user = await get_user(userId);

  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Image width={30} src={CognitoLogo} alt="Logo Cognito" />
          <span className="font-medium text-zinc-300">Cognito</span>
        </Link>

        <span className="text-md text-zinc-800 select-none">/</span>
      </nav>

      <div className="flex items-center gap-6">
        <div className="flex flex-col text-sm">
          <span className="text-zinc-400">{user.name}</span>
          <span className="text-zinc-600">{user.email}</span>
        </div>
        <Avatar>
          <AvatarFallback>
            {user.name
              ?.split(" ")
              .map((i) => i.charAt(0))
              .join("")}
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
