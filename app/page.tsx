import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewOnSite from "./Components/New";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="flex-1">
        <NewOnSite />
      </main>
      <Footer />
    </div>
  );
}
