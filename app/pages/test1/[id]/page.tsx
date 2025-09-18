
import Header from "@/app/Components/Header";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { getArticleById } from "@/app/actions/articles";

// ---------- Типы ----------
type Block = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  order: number;
  articleId: string;
  type: "section-title" | "title" | "subtitle" | "text" | "list" | "code" | "imageLink";
  content: string;
  language?: string | null; // только для code
  imageLink?: string | null; // для imageLink
};

type Article = {
  id: string;
  title: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
  blocks: Block[];
};

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ArticlePage({ params }: Props) {
  const { id } = await params;
  const res = await getArticleById(id);

  // --- обработка ошибки, если статьи нет
  if (!res.success || !res.data) {
    return (
      <div className="flex flex-col w-full min-h-screen">
        <Header />
        <div className="max-w-screen-lg mx-auto p-8 mt-24 text-gray-500">
          {res.error || "Article not found"}
        </div>
       
      </div>
    );
  }

  // --- безопасный каст для TS, чтобы type соответствовал union
  const rawArticle = res.data;
  const article: Article = {
    ...rawArticle,
    blocks: rawArticle.blocks.map((b) => ({
      ...b,
      type: b.type as Block["type"],
    })),
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="w-full lg:w-3/5 max-w-screen-xl mx-auto p-4 sm:p-8 text-gray-900 mt-14">
        {/* Заголовок статьи */}
        <h1 className="text-3xl sm:text-5xl font-bold mb-6">{article.title}</h1>

        {/* Блоки */}
        {article.blocks.map((block) => {
          switch (block.type) {
            case "section-title":
              return (
                <h2
                  key={block.id}
                  className="text-3xl sm:text-4xl font-extrabold mt-10 mb-6 border-b pb-2"
                >
                  {block.content}
                </h2>
              );

            case "title":
              return (
                <h2
                  key={block.id}
                  className="text-2xl sm:text-3xl font-bold mt-8 mb-4"
                >
                  {block.content}
                </h2>
              );

            case "subtitle":
              return (
                <h3
                  key={block.id}
                  className="text-xl sm:text-2xl font-semibold mt-6 mb-3"
                >
                  {block.content}
                </h3>
              );

            case "text":
              return (
                <p key={block.id} className="text-lg text-gray-700 mb-6">
                  {block.content}
                </p>
              );

            case "list":
              return (
                <ul
                  key={block.id}
                  className="list-disc list-inside text-lg text-gray-700 mb-6"
                >
                  {block.content
                    .split("\n")
                    .filter((item) => item.trim() !== "")
                    .map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
              );

            case "code":
              return (
                <div key={block.id} className="mb-6">
                  <SyntaxHighlighter
                    language={block.language || "bash"}
                    style={tomorrow}
                  >
                    {block.content}
                  </SyntaxHighlighter>
                </div>
              );

            case "imageLink":
              // используем imageLink если есть, иначе content как fallback
              const src = block.imageLink || block.content;
              if (!src) return null; // если ссылки нет, не рендерим
              return (
                <div key={block.id} className="mb-6 flex justify-center">
                  <img
                    src={src}
                    alt="Article image"
                    className="rounded-xl shadow-lg max-h-[400px]"
                  />
                </div>
              );

            default:
              return null;
          }
        })}
      </div>
     
    </div>
  );
}
