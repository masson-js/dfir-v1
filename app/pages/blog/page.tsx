import Link from 'next/link';
import Header from '@/app/Components/Header';
import practiceLinks from '@/data/blog.json';
import Footer from '@/app/Components/Footer';

export default function Scripts() {


  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="flex w-auto ml-56 mt-8 flex-1 ">
        <div className="flex flex-col space-y-4 pt-4">
          {practiceLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-sm text-gray-600 hover:text-gray-800 hover:underline transition-colors duration-200 border-l-2 border-yellow-500 pl-4 animate-fade-in opacity-0 animate-[fadeIn_0.6s_ease-in-out_forwards]"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}