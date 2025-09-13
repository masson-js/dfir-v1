"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Title from "./Components/Title";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen  items-center justify-center px-4">
      <Title />
      <div className="text-center">
        <div className="mb-8">
          <span className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-500 to-gray-800 animate-pulse">
            4
          </span>
          <span className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-500 to-gray-800 animate-pulse">
            0
          </span>
          <span className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-500 to-gray-800 animate-pulse">
            4
          </span>
        </div>

        {/* Заголовок */}
        <h1 className="text-4xl font-bold text-gray-600 mb-4">
          I don't have this page or can't found!
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}
