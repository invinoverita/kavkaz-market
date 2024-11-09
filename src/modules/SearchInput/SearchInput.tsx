"use client";

import cross from "public/icons/cross.svg";
import search from "public/icons/search.svg";

const SearchInput = () => {
  return (
    <div className="p-1 rounded-md border-2 border-stroke h-full ml-3 flex gap-4">
      <div className="bg-light rounded-md flex justify-center items-center px-3"><img src={search.src} /></div>
      <input
        className="border-0 pl-0 outline-none focus:border-0 focus:outline-none focus:shadow-none active:border-0 active:shadow-none"
        placeholder="Я ищу ..."
      />
    </div>
  )
}

export { SearchInput };