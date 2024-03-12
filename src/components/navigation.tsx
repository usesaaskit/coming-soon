import Link from "next/link";
import { Logo } from "@/components/logo";
import { Badge } from "@/components/badge";

export function Navigation() {
  return (
    <nav className="sticky top-0 bg-white border-b">
      <div className="container flex items-center py-4">
        <Logo />
        <Badge className="ml-2 mr-auto">Coming Soon</Badge>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  );
}
