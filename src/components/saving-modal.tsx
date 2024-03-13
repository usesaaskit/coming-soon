import { Info, X } from "lucide-react";
import Link from "next/link";

const list = [
  { feature: "Authentication", custom: "3-5 days", MVPKit: "1-2 hours" },
  { feature: "Multi Organization", custom: "3-5 days", MVPKit: "1-2 hours" },
  { feature: "User Roles", custom: "2-4 days", MVPKit: "1-2 hours" },
  { feature: "Payments", custom: "4-6 days", MVPKit: "2-4 hours" },
  {
    feature: "Internationalisation (i18n)",
    custom: "2-4 days",
    MVPKit: "2-4 hours",
  },
  {
    feature: "Emails",
    custom: "1 day",
    MVPKit: "1 hour",
  },
  {
    feature: "Database",
    custom: "2-3 hours",
    MVPKit: "1 hour",
  },
  {
    feature: "File Storage",
    custom: "2-3 hours",
    MVPKit: "1 hour",
  },
  {
    feature: "Markdown Support",
    custom: "4-6 hours",
    MVPKit: "1 hour",
  },
  {
    feature: "Marketing Pages",
    custom: "3-5 days",
    MVPKit: "2-4 hours",
  },
  {
    feature: "Super Admin",
    custom: "2-4 days",
    MVPKit: "2-4 hours",
  },
  {
    feature: "Total Days Required",
    custom: "21-35 days",
    MVPKit: "2-3.5 days",
  },
];

export function SavingModal() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-slate-950/20 flex justify-center items-center sm:p-4">
      <div className="bg-white  w-full sm:max-w-2xl h-full sm:h-[90vh] sm:max-h-[700px] rounded-md relative flex flex-col">
        <div className="px-3 py-4 border-b flex justify-between items-center">
          <p className="font-semibold">
            How many days will I save if I purchase MVP-Kit?
          </p>
          <Link href="/">
            <X size={20} />
          </Link>
        </div>

        <div className="overflow-y-auto flex-1 ">
          <SavingTable />
        </div>

        <p className="p-3 text-sm border-t flex gap-1">
          <Info className="size-5 text-primary shrink-0" />{" "}
          <span>
            These estimates are based on average development times and may vary
            based on individual project requirements and developer experience.
          </span>
        </p>
      </div>
    </div>
  );
}

function SavingTable() {
  return (
    <table className=" divide-y divide-slate-200 min-w-full">
      <thead className="sticky top-0 bg-slate-100">
        <tr>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-3"
          >
            Feature
          </th>
          <th
            scope="col"
            className="px-4 py-3.5 text-left text-sm font-semibold text-slate-900"
          >
            Build by yourself
          </th>
          <th
            scope="col"
            className="px-4 py-3.5 text-left text-sm font-semibold text-slate-900"
          >
            Build using MVP-Kit
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-slate-100">
        {list.map(({ MVPKit, custom, feature }) => (
          <tr key={feature} className="even:bg-slate-50">
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-3">
              {feature}
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-500">
              {custom}
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-500">
              {MVPKit}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
