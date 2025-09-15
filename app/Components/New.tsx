import Link from "next/link";

interface RecentEntry {
  title: string;
  href: string;
  section: "Practice" | "Resources" | "Scripts" | "Regulations";
  author?: string;
}

export default function NewOnSite() {
  const practiceLinks: RecentEntry[] = require("@/data/practice.json") || [];
  const resources: RecentEntry[] = require("@/data/resources.json") || [];
  const scripts: RecentEntry[] = require("@/data/scripts.json") || [];
  const regulations: RecentEntry[] = require("@/data/regulations.json") || [];

  const sections: { [key: string]: RecentEntry[] } = {
    Practice: practiceLinks.slice(0, 3),
    Scripts: scripts.slice(0, 3),
    Resources: resources.slice(0, 3),
    Regulations: regulations.slice(0, 3),
  };

  const getBorderColor = (section: RecentEntry["section"]): string => {
    switch (section) {
      case "Practice":
        return "border-blue-500";
      case "Scripts":
        return "border-green-500";
      case "Resources":
        return "border-yellow-500";
      case "Regulations":
        return "border-purple-500";
      default:
        return "border-gray-500";
    }
  };

  if (
    !practiceLinks.length &&
    !resources.length &&
    !scripts.length &&
    !regulations.length
  ) {
    return (
      <div className="flex mt-4 w-auto ml-4 md:ml-52">
        <div className="flex flex-col">
          <p className="font-bold text-lg">New</p>
          <p className="font-light text-sm text-gray-600">
            No recent entries available.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-auto sm:ml-52 animate-fade-in opacity-0 animate-[fadeIn_0.6s_ease-in-out_forwards] mb-4">
      <div className="flex flex-col">
        <p className="font-bold text-lg my-4">New</p>
        <div className="flex flex-col space-y-2">
          {Object.keys(sections).map(
            (section) =>
              sections[section].length > 0 && (
                <div key={section} className="flex flex-col space-y-2">
                  <p className="font-semibold text-[14px] sm:text-sm text-gray-800">
                    {section}
                  </p>
                  {sections[section].map((entry, index) => (
                    <Link
                      href={entry.href}
                      key={index}
                      className="font-extralight text-sm hover:underline text-gray-600 hover:text-gray-800"
                    >
                      <div
                        className={`flex text-wrap flex-row flex-wrap gap-2 foont-bold font-light text-sm sm:text-sm border-l-2 ${getBorderColor(
                          entry.section
                        )} pl-2 max-[640px]:flex-col max-[640px]:gap-1 font-bold`}
                      >
                        {entry.title}
                      </div>
                    </Link>
                  ))}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
