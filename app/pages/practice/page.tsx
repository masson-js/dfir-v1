import Link from "next/link";
import Header from "@/app/Components/Header";
import practiceLinks from "@/data/practiceLinks.json";
import Footer from "@/app/Components/Footer";

export default function Practice() {
  return (
    <div className="flex flex-col w-full min-h-screen ">
      <Header />
      <div className="flex flex-wrap w-auto ml-4 mt-24 flex-1 sm:ml-52">
        <div className="flex flex-col gap-3 pt-4">
          {practiceLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="sm:text-sm text-[14px] text-gray-600  hover:text-gray-800 hover:underline transition-colors duration-200 border-l-2 border-blue-500 pl-4 animate-fade-in opacity-0 animate-[fadeIn_0.6s_ease-in-out_forwards] text-wrap"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
