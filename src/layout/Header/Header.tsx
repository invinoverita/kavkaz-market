'use client';

import { FC, Fragment } from 'react';

import dynamic from 'next/dynamic';

import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { Navbar } from 'src/modules/Navbar/Navbar';
import { Categories } from 'src/modules/Header/Categories';
import { TypeCategory } from 'src/types';
import { SearchModal } from 'src/modules/SearchModal/SearchModal';
import { SearchInput } from "src/modules/SearchInput/SearchInput";
import { Logo } from 'src/components/Logo/Logo';

import discount from "public/icons/discount.svg";
import location from "public/icons/location.svg";
import mail from "public/icons/mail.svg";
import catalog from "public/icons/catalog.svg";
import phone from "public/icons/phone.svg";
import heart from "public/icons/heart.svg";
import user from "public/icons/user.svg";
import cart from "public/icons/cart.svg";

const Link = dynamic(() => import('../../components/Link/Link'), {
  ssr: false,
});

// const HeaderCart = dynamic(
//   () => import('src/components/HeaderCart/HeaderCart'),
//   {
//     ssr: false,
//   },
// );

type TypeHeaderProps = {
  categories: TypeCategory[];
};

const Header: FC<TypeHeaderProps> = ({ categories = [] }) => {
  return (
    <Fragment>
      <header className="w-full">
        <div className="bg-light h-8 w-full flex items-center">
          <div className="w-full max-w-[1660px] mx-auto flex justify-between items-center">
            <div className="flex gap-5">
              <span className="font-normal text-[14px] leading-[16.8px] text-primary flex gap-2">
                <img src={discount.src} />
                Распродажа
              </span>
              <span className="text-[14px] leading-[16.8px] text-black">Бренды</span>
              <span className="text-[14px] leading-[16.8px] text-black">О компании</span>
              <span className="text-[14px] leading-[16.8px] text-black">Покупателям</span>
              <span className="text-[14px] leading-[16.8px] text-black">Контакты</span>
            </div>
            <div className="flex gap-5 w-max">
              <span className="text-[14px] leading-[16.8px] text-black flex gap-2 w-48">
                <img src={mail.src} />
                info@kavkaz-market.com
              </span>
              <span className="text-[14px] leading-[16.8px] text-black flex gap-2 w-max">
                <img src={location.src} />
                г. Пятигорск ул.Зои Космодемьянской, 43А
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white w-full flex items-center relative">
          <div className="py-5 h-fit w-full max-w-[1660px] mx-auto flex items-center justify-between">
            <Logo />
            <div className='flex items-center gap-4'>
              <button className='bg-primary py-3 px-8 flex items-center gap-3 text-white font-semibold text-base rounded-md ml-10'>
                <img src={catalog.src} />
                Каталог
              </button>
              <SearchInput />
            </div>
            <div className='flex gap-3 ml-10 items-start'>
              <img src={phone.src} className='mt-1' />
              <div className="flex flex-col items-center">
                <p className="font-medium text-2xl text-black">+7 (961) 460-12-41</p>
                <p className="text-sm text-light-text">ежедневно с 09:00 до 18:00</p>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <Link href="/" className='flex h-full w-fit'>
                <div className='px-3 flex items-center justify-center bg-light rounded-md'>
                  <img src={user.src} />
                </div>
                <div className='ml-2 flex flex-col'>
                  <p className='text-black text-base'>Профиль</p>
                  <p className='text-light-text text-sm'>Александр К.</p>
                </div>
              </Link>
              <Link href="/" className='h-full'>
                <div className='p-3 flex items-center justify-center bg-light rounded-md h-full'>
                  <img src={heart.src} />
                </div>
              </Link>
              <Link href="/" className='flex h-full w-fit'>
                <div className='p-3 flex items-center justify-center bg-light rounded-md h-full'>
                  <img src={cart.src} />
                </div>
                <div className='ml-2 flex flex-col'>
                  <p className='text-black text-base'>Корзина</p>
                  <p className='text-light-text text-sm'>пустая</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export { Header };
