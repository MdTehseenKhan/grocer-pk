"use client"
import { SearchIcon } from "@/assets/icons"
import { Button } from "@/app/components"

export default function Search() {
  return (
    <div className="flex flex-col md:flex-row gap-3">
      <div className="relative w-full">
        <div
          className="
            absolute 
            inset-y-0 
            left-0 
            flex 
            items-center 
            pl-3 
            pointer-events-none
        "
        >
          <SearchIcon className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="search"
          placeholder="Search"
          className="
            w-full 
            p-2 
            pl-10 
            text-sm 
            text-white 
            bg-gray-700 
            rounded-lg 
            border 
            border-gray-600 
            focus:border-green-500  
            placeholder-gray-400
        "
        />
      </div>
      <div className="md:w-auto">
        <Button color="white">Search</Button>
      </div>
    </div>
  )
}
