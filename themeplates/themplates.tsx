import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function themplates() {
  
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header>Header</header>
      <div className="max-w-4xl mx-auto p-8  text-gray-900 mt-14 ">
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
        {"Commands"}
        <div className="bg-gray-900 text-gray-10 p-4 rounded mb-6">
          <div className="text-gray-400 text-xs uppercase mb-2 border-b border-gray-700 pb-1">
            BASH
          </div>
          <div className="font-mono text-sm">
            <div className="text-gray-400"># comment</div>
            <div className="text-green-400">comand</div>
            <br />
            <div className="text-gray-400"># comment</div>
            <div className="text-green-400">command</div>
          </div>
        </div>

        {"Code "}

        <div>
          <SyntaxHighlighter language="bash" style={tomorrow}>
            {`BASH
# Basic process enumeration
volatility -f memory.dmp --profile=Win10x64_19041 pslist
# Detect process injection
volatility -f memory.dmp --profile=Win10x64_19041 pslist
             
             `}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
