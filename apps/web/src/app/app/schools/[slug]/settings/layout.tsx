import { SettingsList } from "@/components/settings-list";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { PropsWithChildren } from "react";

export default function SettingsPageRoot({ children }: PropsWithChildren) {
  return (
    <section className="px-32 grid grid-cols-[200px_1fr] gap-10 mt-8">
      <SettingsList />
      {children}
    </section>
  );
}
