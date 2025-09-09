import Link from 'next/link';

export default function Header() {
  const navLinks = [
    { title: 'Practice', href: '/pages/practice' },
    { title: 'Scripts', href: '/pages/scripts' },
    { title: 'Resources', href: '/pages/resources' },
    { title: 'Regulations', href: '/pages/regulations' },
  ];

  return (
    <div className="flex mt-4 w-auto mx-8 items-center justify-between">
      <div className="flex flex-wrap flex-row items-center">
        <Link
          className="ml-6 my-2 font-bold text-4xl rounded-lg text-gray-500 hover:text-gray-800 transition-all duration-200 ease-in-out p-2"
          href="/"
        >
          DFIRE
        </Link>
        <div className="flex flex-wrap items-center ml-8">
          {navLinks.map((link, index) => (
            <Link
          key={index}
          className="font-bold text-lg text-gray-400 px-4  hover:text-gray-800 transition-all duration-200 ease-in-out"
          href={link.href}
        >
          {link.title}
        </Link>
          ))}
        </div>
      </div>
    </div>
  );
}