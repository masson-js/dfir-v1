import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewOnSite from "./Components/New";
import Title from "./Components/Title";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col-reverse lg:flex-row items-center px-4 mt-18 gap-6">
        <div className="flex flex-col justify-center lg:justify-start lg:self-start">
          <NewOnSite />
        </div>
        <Title/>
      </main>
      <Footer />
    </div>
  );
}
