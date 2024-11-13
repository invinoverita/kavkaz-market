"use client";

import { API_URL } from 'src/config/config';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FC, useState } from 'react';
import { TypeProduct } from 'src/types';
import { emptyUrl } from 'src/config/config';

import { ButtonCart } from 'src/modules/ButtonCart/ButtonCart';

import heartGrey from "public/icons/heart-grey.svg"
import heartGreen from "public/icons/heart-green.svg"

const Link = dynamic(() => import('../Link/Link'), { ssr: false });

type TypeCardProps = {
  data: TypeProduct;
  cardClassName?: string;
  type?: '';
};

const Card: FC<TypeCardProps> = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const image = data.pictures.length
    ? API_URL + '/' + data.pictures[0].url
    : emptyUrl;

  return (
    <div
      key={data.id}
      className={` flex flex-col `}
    >
      <Link href={`/product/${data.id}`} className="h-full">
        <div className="relative overflow-hidden rounded-lg bg-gray-100 pb-[100%] mb-5 border border-stroke">
          <Image src={image} alt={data.name} fill loading="lazy" />
          <div className="absolute bottom-3 right-3" onClick={() => setIsFavorite(!isFavorite)}>
            <img src={isFavorite ? heartGreen.src : heartGrey.src} />
          </div>
          <p
            className="absolute top-3 left-3 rounded py-1 px-2 bg-mark-new uppercase font-medium text-sm text-white"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            новинка
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-xl text-black mb-2">
            {data.name}
          </h3>
          <p className="text-base font-medium text-light-text mb-7">
            {data.description_short}
          </p>
        </div>
      </Link>
      <p className='text-base text-black font-normal mb-2'>Вес, гр.</p>
      <div className='flex items-center gap-1 mb-7'>
        <button className='border-2 border-stroke p-2 rounded'>500</button>
        <button className='border-2 border-stroke p-2 rounded'>1000</button>
      </div>
      <h2 className='text-3xl text-black font-bold mb-4'>300 p</h2>
      <div className="flex items-center gap-2">
        <ButtonCart data={data} />
        <Link href={`/product/${data.id}`}>
          <button className='flex w-max items-center gap-2 rounded-md border-2 border-primary bg-white px-5 py-2 text-primary text-base font-semibold'>
            Подробнее
          </button>
        </Link>
      </div>
    </div>
  );
};

export { Card };
