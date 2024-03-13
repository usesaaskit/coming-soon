import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/tailwind.css";
import { cnMerge } from "@/utils";
import { Navigation } from "@/components/navigation";
import { CRONBOT_APP_URL, TWITTER_EVENT_ID } from "@/config/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://usesaaskit.com"),
  title: {
    default: "UseSaasKit: Fastest way to launch your Saas",
    template: "%s | UseSaasKit",
  },
  openGraph: {
    title: "UseSaasKit: Fastest way to launch your Saas",
    description:
      "MVP Kit pre-configured with Next.js, Supabase, Lemon Squeezy, and Tailwind CSS. Build your startup in a week, not in a month.",
    url: "https://usesaaskit.com",
    siteName: "UseSaasKit",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "UseSaasKit: Fastest way to launch your Saas",
    card: "summary_large_image",
  },
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
        <script async src={CRONBOT_APP_URL}></script>
        <script
          defer
          data-domain="usesaaskit.com"
          src="https://plausible.io/js/script.js"
        ></script>

        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: ` // Insert Twitter Event ID
          twq('event', ${TWITTER_EVENT_ID}, {
          });`,
          }}
        ></script>
      </body>
    </html>
  );
}
