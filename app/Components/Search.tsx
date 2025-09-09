import React from 'react'
import { Search as SearchIcon } from 'lucide-react';
export default function Search() {
  return (
    <div className='flex items-center mx-4 px-3 py-1 border border-gray-300 rounded-lg h-8 w-auto'>
      <SearchIcon className="h-4 w-4 text-gray-400 mr-2" />
      <input 
        type="text" 
        placeholder="Search..." 
        className="flex-1 outline-none text-sm bg-transparent"
      />
    </div>

   
  )
}
