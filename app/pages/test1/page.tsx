import Link from 'next/link';
import Header from '@/app/Components/Header';
import Footer from '@/app/Components/Footer';
import { getArticles } from '@/app/actions/articles';

export default async function Blogs() {
  const res = await getArticles("blogs");

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="flex flex-wrap w-auto ml-4 mt-24 flex-1 sm:ml-52">
        <div className="flex flex-col gap-3 pt-4">
          {res.success && res.data?.length ? (
            res.data.map((article) => (
              <Link
                key={article.id}
                href={`/pages/test1/${article.id}`}
                className="sm:text-sm text-[14px] text-gray-600 hover:text-gray-800 hover:underline transition-colors duration-200 border-l-2 border-purple-500 pl-4 animate-fade-in opacity-0 animate-[fadeIn_0.6s_ease-in-out_forwards] text-wrap"
              >
                {article.title}
              </Link>
            ))
          ) : (
            <div className="text-gray-500 text-sm italic pl-4">
              Will be soon
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
