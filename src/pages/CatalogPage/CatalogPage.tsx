import { FC, Fragment } from 'react';
import { Sort } from 'src/components/Sort/Sort';
import { TypeDefaultResData } from 'src/lib/utils';
import { Filter } from 'src/modules/Filter/Filter';
import { MobileFilter } from 'src/modules/MobileFilter/MobileFilter';
import { ProductsList } from 'src/modules/ProductsList/ProductsList';
import { TypeCategory, TypeProduct } from 'src/types';

import { FunnelIcon } from '@heroicons/react/24/outline';
import { CatalogBlockCard, ShippingPaymentInfo } from 'src/components/Main';
import dynamic from 'next/dynamic';
import { getCategoryById } from 'src/lib/api';
import { notFound } from 'next/navigation';

const Link = dynamic(() => import('src/components/Link/Link'), {
  ssr: false,
});

type TypeCatalogPageType = {
  data: TypeDefaultResData<TypeProduct>;
  categories: TypeDefaultResData<TypeCategory>;
  category_id: string;
};

const CatalogPage: FC<TypeCatalogPageType> = ({
  data = {
    result: [],
    count: 0,
  },
  categories = {
    result: [],
    count: 0,
  },
  category_id,
}) => {
  const title =
    category_id === 'all'
      ? 'Каталог'
      : categories.result.find(
        (category) => category.id === Number(category_id),
      )?.name;

  const selectedCategory = category_id !== 'all' && categories.result.find(
    (category) => category.id === Number(category_id),
  );

  const selectedParent = selectedCategory && categories.result.find(
    (category) => selectedCategory.parent === category.id
  )

  if (category_id === "all") {
    return (
      <Fragment>
        <div className='w-full max-w-[1660px] mx-auto'>
          <section className='mt-7 mb-10 w-full'>
            <div className='flex items-center gap-2 mb-14'>
              <Link href="/">
                <p className='text-light-text font-medium text-base'>Главная</p>
              </Link>
              <p className='text-light-text font-medium text-base'>/</p>
              <p className='text-black font-medium text-base'>Каталог</p>
            </div>
            <h2 className='relative font-medium text-5xl text-black w-fit'>
              {title}
              <strong className='absolute -right-12 top-0 text-black text-lg font-normal'>
                ({categories.count})
              </strong>
            </h2>
          </section>
          <section className='flex justify-between flex-wrap gap-5 w-full mb-[120px]'>
            {categories.result.map((category) => {
              return (<CatalogBlockCard key={category.id} category={category} />)
            })}
          </section>
        </div>
        <ShippingPaymentInfo />
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <section className="w-full max-w-[1660px] mx-auto">
          <div className='mt-7 mb-10 w-full'>
            <div className='flex items-center gap-2 mb-14'>
              <Link href="/">
                <p className='text-light-text font-medium text-base'>Главная</p>
              </Link>
              <p className='text-light-text font-medium text-base'>/</p>
              <Link href="/catalog/all">
                <p className='text-light-text font-medium text-base'>Каталог</p>
              </Link>
              <p className='text-light-text font-medium text-base'>/</p>
              {selectedCategory && selectedCategory.parent && (
                <>
                  <Link href={"/catalog/" + (selectedParent ? selectedParent.id : "all")}>
                    <p className='text-light-text font-medium text-base'>{selectedParent && selectedParent.name}</p>
                  </Link>
                  <p className='text-light-text font-medium text-base'>/</p>
                </>
              )}
              <p className='text-black font-medium text-base'>{title}</p>
            </div>
            <h2 className='relative font-medium text-5xl text-black w-fit'>
              {title}
              <strong className='absolute -right-12 top-0 text-black text-lg font-normal'>
                ({data.count})
              </strong>
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-y-8">
            <aside className="relative hidden lg:block">
              <div className="sticky top-0">
                <Filter
                  categories={categories.result}
                  category_id={category_id}
                />
              </div>
            </aside>
            <div className="col-span-1 lg:col-span-3 pl-14">
              {data.result.length ? (
                <ProductsList data={data.result} />
              ) : (
                <div className="flex flex-col items-center justify-center gap-3 py-24">
                  <div>
                    <h2 className="text-center text-lg font-medium tracking-tight">
                      Товаров в данной категории нет
                    </h2>
                    <span className="mt-2 block text-center text-base text-slate-500">
                      Выберите другую категорию
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        {/* <section className="container">
          <div className="flex items-center justify-between py-4 lg:justify-end">
            <div className="lg:hidden">
              <MobileFilter
                categories={categories.result}
                category_id={category_id}
                trigger={
                  <button className="flex gap-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                    <FunnelIcon className="h-5 w-5 text-slate-600" />
                    <p>Фильтр</p>
                  </button>
                }
              />
            </div>
            <div>
              <Sort />
            </div>
          </div>
        </section> */}
      </Fragment>
    );
  }
};

export default CatalogPage;
