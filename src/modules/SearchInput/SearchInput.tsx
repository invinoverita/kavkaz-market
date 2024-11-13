"use client";

import cross from "public/icons/cross.svg";
import search from "public/icons/search.svg";
import { useState } from "react";

const SearchInput = () => {
  const [value, setValue] = useState("");
  return (
    <div className="p-1 rounded-md border-2 border-stroke h-full ml-3 flex gap-4">
      <div className="bg-light rounded-md flex justify-center items-center px-3 cursor-pointer" onClick={() => {
        if (value.length) {
          setValue("");
        }
      }}>
        <img src={value.length ? cross.src : search.src} className="w-[15px]" />
      </div>
      <input
        className="border-0 pl-0 outline-none focus:border-0 focus:outline-none focus:shadow-none active:border-0 active:shadow-none"
        placeholder="Я ищу ..."
        value={value}
        onChange={(e) => { setValue(e.target.value) }}
      />
    </div>
  )
}

export { SearchInput };