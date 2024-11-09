import React, { FC } from 'react'

import dynamic from 'next/dynamic';
import { TypeCategory } from 'src/types';

import arrow from "public/icons/arrow.svg";
import { CatalogBlockCard } from './Card/CatalogBlockCard';

const Link = dynamic(() => import('src/components/Link/Link'), {
  ssr: false,
});

type TypeCatalogBlockProps = {
  categories: TypeCategory[];
};

const CatalogBlock: FC<TypeCatalogBlockProps> = ({
  categories = [],
}) => {
  return (
    <div className="w-full max-w-[1660px] mx-auto mb-24">
      <div className='mb-12 flex items-center justify-between'>
        <h2 className='relative font-medium text-5xl text-black w-fit'>
          Каталог продукции
          <strong className='absolute -right-12 top-0 text-light-text text-lg font-normal'>
            ({categories.length})
          </strong>
        </h2>
        <Link href="/catalog" className='flex items-center gap-2'>
          <p className='text-lg text-black font-medium'>Смотреть все<br /> категории</p>
          <div className='p-4 bg-primary rounded-md'>
            <img src={arrow.src} />
          </div>
        </Link>
      </div>
      <div className='flex justify-between flex-wrap gap-5'>
        {categories.slice(0, 8).map((category) => {
          return (<CatalogBlockCard key={category.id} category={category} />)
        })}
      </div>
    </div>
  )
}

export { CatalogBlock }