import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/tailwind.css";
import { cnMerge } from "@/utils";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UseSaasKit: Fastest way to launch your Saas",
  description: "Build your startup in a week not in a month.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cnMerge(inter.className)}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
