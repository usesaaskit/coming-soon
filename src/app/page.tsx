import { Badge } from "@/components/badge";
import { JoinWaitingListForm } from "@/components/join-waiting-list-form";
import { cnMerge } from "@/utils";
import { FEATURES } from "@/constant";
import { SavingModal } from "@/components/saving-modal";
import Link from "next/link";

interface HomeProps {
  searchParams: { "saving-modal": string };
}

export default function Home({ searchParams }: HomeProps) {
  const isSavingModalOpen = searchParams["saving-modal"] === "true";

  return (
    <main
      className={cnMerge(
        "container min-h-[calc(100vh-4.563rem)] grid place-items-center"
      )}
    >
      <div className="max-w-3xl flex justify-center items-center flex-col gap-2 text-center sm:-mt-20 ">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          Fastest way to launch your SaaS
        </h1>
        <p className="sm:text-lg text-slate-500 mb-6">
          MVP Kit pre-configured with Next.js, Supabase, Lemon Squeezy, and
          Tailwind CSS. Build your startup in a week, not in a month.{" "}
          <Link href="?saving-modal=true" className="underline text-slate-950">
            How many days will I save if I purchase MVP-Kit?
          </Link>
        </p>
        <ul className="max-w-xl flex gap-2 flex-wrap justify-center mb-6">
          {FEATURES.map((feature) => (
            <li key={feature}>
              <Badge>{feature}</Badge>
            </li>
          ))}
        </ul>

        <JoinWaitingListForm />

        <p className="mt-2 max-w-lg">
          First 100 customers who join the waitlist will receive
          <span className="font-semibold"> 50% Early Bird discount</span> when
          we launch the{" "}
          <span className="text-primary font-semibold">MVP Kit</span>.
        </p>
      </div>
      {isSavingModalOpen && <SavingModal />}
    </main>
  );
}
