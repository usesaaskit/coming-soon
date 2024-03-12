import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-1">
        <Image
          src="/logo.png"
          alt="a logo of usesasskit.com"
          width={40}
          height={40}
        />
        <p className="font-semibold text-base">UseSaasKit</p>
      </div>
    </Link>
  );
}
