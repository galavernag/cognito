import { Header } from "@/components/header";
import { Subheader } from "@/components/subheader";
import { PropsWithChildren } from "react";

export default function SchoolRootLayout({
  children,
  params,
}: PropsWithChildren<{ params: { id: string } }>) {
  return (
    <main>
      <div className="px-32 py-10">
        <Header />
      </div>

      <Subheader id={params.id} />
      {children}
    </main>
  );
}
