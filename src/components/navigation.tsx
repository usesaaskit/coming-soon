import Link from "next/link";
import { Logo } from "@/components/logo";

export function Navigation() {
  return (
    <nav className="sticky top-0 bg-white border-b">
      <div className="container flex justify-between items-center py-4">
        <Logo />
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  );
}
