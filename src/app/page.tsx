import { Logo } from "@/components/logo";
import { cnMerge } from "@/utils";

export default function Home() {
  return (
    <main
      className={cnMerge(
        "container min-h-[calc(100vh-4.563rem)] grid place-items-center"
      )}
    >
      <div className="flex justify-center items-center flex-col gap-2 -mt-20">
        <h1 className="text-2xl sm:text-5xl font-bold mb-2">Coming Soon</h1>
        <p className="max-w-xl sm:text-lg text-center text-slate-500">
          The fastest way to launch your SaaS. MVP Kit pre-configured with
          Next.js, Supabase, Lemon Squeezy, and Tailwind CSS
        </p>

        <form className="w-full max-w-lg flex flex-col sm:flex-row gap-2 mt-6">
          <input
            type="text"
            placeholder="example@mail.com"
            className="flex-1 px-3 py-2 rounded-md border"
          />
          <button className="px-6 py-2 rounded-md bg-slate-950 text-slate-50">
            Subscribe
          </button>
        </form>
      </div>
    </main>
  );
}
