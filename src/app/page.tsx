import { Badge } from "@/components/badge";
import { JoinWaitingListForm } from "@/components/join-waiting-list-form";
import { cnMerge } from "@/utils";
import { FEATURES } from "@/constant";

export default function Home() {
  return (
    <main
      className={cnMerge(
        "container min-h-[calc(100vh-4.563rem)] grid place-items-center"
      )}
    >
      <div className="max-w-3xl flex justify-center items-center flex-col gap-2 text-center -mt-20 ">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2">
          Build your startup in a week,
          <br /> not in a month.
        </h1>
        <p className="sm:text-lg text-slate-500 mb-6">
          The fastest way to launch your SaaS. MVP Kit pre-configured with
          Next.js, Supabase, Lemon Squeezy, and Tailwind CSS. Now includes
          everything you need:
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
          <span className="text-blue-500 font-semibold">MVP Kit</span>.
        </p>
      </div>
    </main>
  );
}
