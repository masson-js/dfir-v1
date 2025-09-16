import Link from 'next/link';
import Header from '@/app/Components/Header';
import resources from '@/data/resources.json';
import Footer from '@/app/Components/Footer';

interface Links {
  title: string;
  href: string;
}

export default function Resources() {


  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="flex flex-wrap w-auto ml-4 mt-24 flex-1 sm:ml-52">
        <div className="flex flex-col gap-3 pt-4">
           {(resources as Links[]).length > 0 ? (
            (resources as Links[]).map((link, index) => (
              <Link
                key={index}
                href={link.href}
                 className="font-extralight text-sm hover:underline  transition-colors duration-200  border-yellow-500 flex text-wrap flex-row flex-wrap gap-2 foont-bold  sm:text-sm border-l-2 px-4" >
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