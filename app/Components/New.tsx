import Link from 'next/link';

interface RecentEntry {
  title: string;
  href: string;
  section: 'Practice' | 'Resources' | 'Scripts' | 'Regulations';
  author?: string;
}

export default function NewOnSite() {
  // Load JSON files directly
  const practiceLinks: RecentEntry[] = require('@/data/practiceLinks.json') || [];
  const resources: RecentEntry[] = require('@/data/resources.json') || [];
  const scripts: RecentEntry[] = require('@/data/scripts.json') || [];
  const regulations: RecentEntry[] = require('@/data/regulations.json') || [];

  // Combine the top 5 entries from each section
  const recentEntries: RecentEntry[] = [
    ...practiceLinks.slice(0, 5),
    ...resources.slice(0, 5),
    ...scripts.slice(0, 5),
    ...regulations.slice(0, 5),
  ];

  const getBorderColor = (section: RecentEntry['section']): string => {
    switch (section) {
      case 'Practice':
        return 'border-blue-500';
      case 'Resources':
        return 'border-yellow-500';
      case 'Scripts':
        return 'border-green-500';
      case 'Regulations':
        return 'border-purple-500';
      default:
        return 'border-gray-500';
    }
  };

  if (!recentEntries || recentEntries.length === 0) {
    return (
      <div className="flex mt-4 w-auto ml-56">
        <div className="flex flex-col">
          <p className="font-bold text-lg">New</p>
          <p className="font-light text-sm text-gray-600">No recent entries available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex mt-4 w-auto ml-56 mb-20">
      <div className="flex flex-col">
        <p className="font-bold text-lg">New</p>
        <div className="flex flex-col space-y-2">
          {recentEntries.map((entry, index) => (
            <div
              key={index}
              className={`flex flex-row flex-wrap gap-2 font-light text-sm border-l-2 ${getBorderColor(
                entry.section
              )} pl-4`}
            >
              <p
               
                className="text-gray-400 font-bold"
              >
                {entry.section}
              </p>
              <p>-</p>
              {entry.author && <p className='text-gray-600 hover:text-gray-800 font-thin'>{entry.author}</p>}
              {entry.author && <p>-</p>}
              <Link
                href={entry.href}
                className="text-gray-600 hover:text-gray-800 font-bold hover:underline"
              >
                {entry.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}