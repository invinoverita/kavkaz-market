'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';
import { Dropdown } from 'src/components/Dropdown/Dropdown';

import type { TypeCategory } from 'src/types';
import { Disclosure } from 'src/components/Disclosure/Disclosure';

const Link = dynamic(() => import('../../components/Link/Link'), {
  ssr: false,
});

type TypeCategories = {
  data: TypeCategory[];
  onClose?: () => void;
};

const Categories: FC<TypeCategories> = ({ data, onClose = () => {} }) => {
  return (
    <ul className="flex flex-col tracking-tight lg:flex-row lg:items-center lg:justify-center lg:border-b">
      <li
        onClick={() => onClose()}
        className="px-4 py-2 text-lg transition-opacity hover:opacity-80 sm:px-6 sm:py-3 lg:border-b-0 lg:text-base"
      >
        <Link href={`/catalog/all`}>Все</Link>
      </li>
      {data.slice(0, 7).map((category) => (
        <li
          onClick={() => onClose()}
          key={category.id}
          className="px-4 py-2 text-lg transition-opacity last:border-b-0 hover:opacity-80 sm:px-6 sm:py-3 lg:border-b-0 lg:text-base lg:last:border-none"
        >
          <Link href={`/catalog/${category.id}`}>{category.name}</Link>
        </li>
      ))}
      <div className="hidden lg:block">
        {data.length > 7 && (
          <Dropdown data={data.slice(8, data.length - 7)}>
            <li className="px-4 py-2 text-lg text-slate-500 transition-opacity last:border-b-0 hover:opacity-80 sm:px-6 sm:py-3 lg:border-b-0 lg:text-base lg:last:border-none">
              <span>Остальное</span>
            </li>
          </Dropdown>
        )}
      </div>
      <div className="lg:hidden">
        <Disclosure
          trigger={
            <li className="py-2 pl-4 text-lg text-slate-500 transition-opacity last:border-b-0 hover:opacity-80 sm:py-3 sm:pl-6 lg:border-b-0 lg:text-base lg:last:border-none">
              <span>Остальное</span>
            </li>
          }
        >
          {data.slice(7, data.length - 1).map((category) => (
            <li
              key={category.id}
              onClick={() => onClose()}
              className="py-2 text-lg text-black transition-opacity last:border-b-0 hover:opacity-80 sm:py-3 lg:border-b-0 lg:text-base lg:last:border-none"
            >
              <Link href={`/catalog/${category.id}`}>{category.name}</Link>
            </li>
          ))}
        </Disclosure>
      </div>
    </ul>
  );
};

export { Categories };
