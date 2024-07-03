import Image from "next/image";
import CognitoLogo from "@/assets/logo.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image width={30} src={CognitoLogo} alt="Logo Cognito" />
        <span className="font-medium text-zinc-300">Cognito</span>
      </div>

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
