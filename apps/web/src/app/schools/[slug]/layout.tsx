import { Header } from "@/components/header";
import { Subheader } from "@/components/subheader";
import { PropsWithChildren } from "react";

export default function SchoolRootLayout({
  children,
  params,
}: PropsWithChildren<{ params: { slug: string } }>) {
  return (
    <main>
      <div className="px-32 py-10">
        <Header />
      </div>

      <Subheader slug={params.slug} />
      {children}
    </main>
  );
}
