export default function Title() {
  return (
    <div className="flex justify-center items-center lg:items-start animate-fade-in opacity-0 animate-[fadeIn_0.6s_ease-in-out_forwards]">
      <div className="text-center lg:text-right lg:w-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold  leading-tight mb-4">
          <span className="block text-right text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-500 to-gray-800 ">Cybersecurity</span>
          <span className="block text-gray-400 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mt-2 text-right">
            and DFIR
          </span>
        </h1>
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-400 to-red-400 rounded-full mt-6 animate-pulse"></div>
        <p className="text-gray-600 text-sm lg:text-base mt-4 leading-relaxed text-right">
          Exploring the depths of Cybersecurity, Digital Forensics, and Incident
          Response
        </p>
      </div>
    </div>
  );
}
