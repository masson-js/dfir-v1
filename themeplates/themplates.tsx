import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function themplates() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header>Header</header>
      <div className="w-full lg:w-3/5 max-w-screen-xl mx-auto p-4 sm:p-8 text-gray-900 mt-14 animate-fade-in opacity-0 animate-[fadeIn_0.6s_ease-in-out_forwards] overflow-x-hidden">
        {" Section Title"}
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-gray-300">
          Section Title
        </h1>

        {"Title"}
        <h2 className="text-2xl sm:text-4xl font-bold mb-2 mt-4">Title</h2>

        {"Sub title"}
        <h3 className="text-2xl font-semibold mb-3">Volatility Framework</h3>

        {"Simple Text"}
        <p className="text-lg text-wrap sm:text-lg text-gray-700 mb-8 mr-8 mt-8">
          Simple Text
        </p>

        {"List"}
        <ul className="list-disc text-lg text-wrap sm:text-lg text-gray-700 mb-8 mr-8 ml-8 mt-8 space-y-2">
          <li>
            <strong>Captures runtime behavior</strong> - Processes, network list
          </li>
        </ul>

        {"Code and Scripts"}

        {"Code "}

        <div>
          <SyntaxHighlighter language="bash" style={tomorrow}>
            {`# Basic process enumeration (bash)
volatility -f memory.dmp --profile=Win10x64_19041 pslist
# Detect process injection (bash)
volatility -f memory.dmp --profile=Win10x64_19041 malfind`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
