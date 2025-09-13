'use client'
import { useState } from "react";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import terms from "@/data/wiki.json";

interface TermItem {
  term: string;
  definition: string;
  category: string;
}



export default function Wiki() {
  const [search, setSearch] = useState("");

  const filtered: TermItem[] = search.trim()
    ? terms.filter((item: TermItem) =>
        item.term.toLowerCase().includes(search.toLowerCase().trim())
      )
    : [];

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="flex justify-center mt-24 flex-1 px-4 sm:px-0">
        <div className="flex flex-col gap-4 w-full max-w-2xl">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-gray-400">Wiki</h1>

          {/* Search bar - фиксированная позиция */}
          <div className="sticky top-4 z-10">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search terms..."
              className="w-full p-3 rounded-lg border border-gray-400  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200"
            />
          </div>

          {/* Контейнер для результатов с фиксированной минимальной высотой */}
          <div className="min-h-[200px]">
            {search.trim() && (
              <div className="mt-2 flex flex-col gap-3 animate-in fade-in duration-200">
                {filtered.length > 0 ? (
                  filtered.map((item, idx) => (
                    <div 
                      key={idx} 
                      className=" p-4  hover:bg-gray-750 transition-colors"
                    >
                      <h2 className="text-lg font-semibold text-gray-600 mb-2">{item.term}</h2>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">{item.definition}</p>
                      <span className="text-xs text-gray-400 py-1 ">
                        Category: {item.category}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-400">No results found for "{search}"</p>
                  </div>
                )}
              </div>
            )}
            {!search.trim() && (
              <div className="text-center py-12">
                <p className="text-gray-500">Start typing to search...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}