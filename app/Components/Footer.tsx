import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex w-full h-22 bg-gray-200 justify-center">
      <div className="flex flex-wrap items-center gap-4 text-gray-400">
        <Link href="/pages/about" className="flex items-center gap-2 hover:underline">
          <Image
            src="/pic.jpg"
            className="rounded-full"
            width={30}
            height={30}
            alt="Picture of the author"
          />
          <p className="font-light text-sm">Wlod Simon, 2025</p>
        </Link>
        <a
          href="https://www.linkedin.com/in/masson-simon"
          className="font-light text-sm hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/masson-js"
          className="font-light text-sm hover:underline"
        >
          Github
        </a>
      </div>
    </div>
  );
}