import Link from "next/link";
import Header from "@/app/Components/Header";
import practiceLinks from "@/data/practiceLinks.json";
import Footer from "@/app/Components/Footer";

export default function Wiki() {
  return (
    <div className="flex flex-col w-full min-h-screen ">
      <Header />
      <div className="flex flex-wrap w-auto ml-4 mt-24 flex-1 sm:ml-52">
        <div className="flex flex-col gap-3 pt-4">
          <h1>Wiki</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
