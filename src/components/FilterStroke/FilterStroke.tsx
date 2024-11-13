"use client";

import { FC, useRef, useState } from "react";

import arrow from "public/icons/arrow.svg";
import arrowGreen from "public/icons/arrow-green.svg";
import { TypeCategory } from "src/types";
import dynamic from "next/dynamic";

const Link = dynamic(() => import('src/components/Link/Link'), {
  ssr: false,
});

type TypeFilterStrokeProps = {
  isSelected: boolean;
  category: TypeCategory;
  categories: TypeCategory[];
};

const FilterStroke: FC<TypeFilterStrokeProps> = ({ category, categories, isSelected }) => {
  const contentHeight = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const isParent = categories.filter((childrenCategory) => {
    return childrenCategory.parent == category.id
  });

  return (
    <div className="overflow-hidden">
      <div className="p-4 mb-1 bg-light-second rounded-md flex gap-5 items-center">
        <Link href={"/catalog/" + category.id} className="cursor-pointer grow">
          <p className='text-black text-lg font-medium'>{category.name}</p>
        </Link>
        {isParent.length !== 0 && <picture
          className={'p-2 px-3 rounded cursor-pointer ' + (isOpen ? "bg-white" : "bg-primary")}
          onClick={() => { setIsOpen(!isOpen) }}
        >
          {!isOpen ?
            <img src={arrow.src} className='rotate-90' />
            :
            <img src={arrowGreen.src} className='-rotate-90' />}
        </picture>}
      </div>
      {isParent.length !== 0 &&
        <div
          ref={contentHeight}
          className="overflow-hidden transition-all pl-7 flex flex-col gap-5"
          style={{
            marginTop: isOpen ? "15px" : "0",
            marginBottom: isOpen ? "15px" : "0",
            maxHeight: isOpen ? `${contentHeight.current && contentHeight.current.scrollHeight}px` : "0px",
            opacity: isOpen ? 1 : 0,
          }}
        >
          {isParent.map((children) => (
            <Link href={"/catalog/" + children.id} className="cursor-pointer">
              <p className="font-medium text-base text-black">{children.name}</p>
            </Link>
          ))}
        </div>}
    </div>
  )
}

export { FilterStroke }