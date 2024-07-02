import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cognito",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <link rel="shortcut icon" href="favicon.png" type="image/png" />
      <body className={cn(inter.className, "bg-zinc-950")}>{children}</body>
    </html>
  );
}
