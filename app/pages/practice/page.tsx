import Link from 'next/link';
import Header from '@/app/Components/Header';
import practiceLinks from '@/data/practiceLinks.json';

export default function Practice() {


  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex w-auto ml-56 mt-8 ">
        <div className="flex flex-col space-y-4 border-t-2 border-blue-500 pt-4">
          {practiceLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-sm text-gray-600 hover:text-gray-800 hover:underline transition-colors duration-200"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}