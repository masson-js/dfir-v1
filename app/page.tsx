import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewOnSite from "./Components/New";
import Title from "./Components/Title";

export default function Home() {
  return (
   <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col-reverse lg:flex-row items-stretch px-4 sm:px-4 sm:mt-24 gap-2 sm:gap-4 w-full justify-center sm:justify-start lg:justify-start">
        <div className="flex flex-col justify-start w-full lg:w-auto">
          <NewOnSite />
        </div>
        <div className="w-full lg:w-auto">
          <Title />
        </div>
      </main>
      <Footer />
    </div>
  );
}