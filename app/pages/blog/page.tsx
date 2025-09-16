import Link from 'next/link';
import Header from '@/app/Components/Header';
import blogs from '@/data/blogs.json';
import Footer from '@/app/Components/Footer';

interface Links {
  title: string;
  href: string;
}

export default function Blogs() {


  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="flex flex-wrap w-auto ml-4 mt-24 flex-1 sm:ml-52">
        <div className="flex flex-col gap-3 pt-4">
         {(blogs as Links[]).length > 0 ? (
            (blogs as Links[]).map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="sm:text-sm text-[14px] text-gray-600  hover:text-gray-800 hover:underline transition-colors duration-200 border-l-2 border-purple-500 pl-4 animate-fade-in opacity-0 animate-[fadeIn_0.6s_ease-in-out_forwards] text-wrap"
              >
                {link.title}
              </Link>
            ))
          ) : (
            <div className="text-gray-500 text-sm italic pl-4">
             Will be soon
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
}