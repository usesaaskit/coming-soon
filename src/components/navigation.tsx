import Link from "next/link";
import { Logo } from "@/components/logo";
import { Badge } from "@/components/badge";
import { GithubIcon } from "@/components/github-icon";

export function Navigation() {
  return (
    <nav className="sticky top-0 bg-white border-b">
      <div className="container flex items-center py-4 gap-2">
        <Logo />
        <Badge className="mr-auto">Coming Soon</Badge>
        <Link href="/blog" className="mr-2">
          Blog
        </Link>
        <Link href="https://github.com/useSaasKit" legacyBehavior>
          <a target="_blank">
            <GithubIcon />
          </a>
        </Link>
      </div>
    </nav>
  );
}
