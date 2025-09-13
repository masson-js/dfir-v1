import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewOnSite from "./Components/New";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col-reverse lg:flex-row items-center px-4 mt-18 gap-6">
        <div className="flex flex-col justify-center lg:justify-start lg:self-start">
          <NewOnSite />
        </div>
        <div className="flex justify-center items-center lg:items-start animate-fade-in opacity-0 animate-[fadeIn_0.6s_ease-in-out_forwards]">
          <div className="text-center lg:text-right lg:w-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-300 leading-tight mb-4">
              <span className="block text-right">Cybersecurity</span>
              <span className="block text-gray-400 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mt-2 text-right">
                and DFIR
              </span>
              <span className="block text-gray-500 text-xl sm:text-2xl lg:text-3xl xl:text-4xl mt-2 font-light text-right">
                Notes
              </span>
            </h1>
            <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-6"></div>
            <p className="text-gray-600 text-sm lg:text-base mt-4 leading-relaxed text-right">
              Exploring the depths of Cybersecurity, Digital Forensics, and Incident Response
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}