import dynamic from 'next/dynamic';
import { FC } from 'react';
import { Logo } from 'src/components/Logo/Logo';
import { TypeCategory } from 'src/types';

const Link = dynamic(() => import('../../components/Link/Link'), {
  ssr: false,
});

type TypeFooterProps = {
  categories: TypeCategory[];
};

const FooterLink = ({ name }: { name: string }) => {
  return (
    <Link href="/" className='text-black w-fit'>
      {name}
    </Link>
  )
}

const Footer: FC<TypeFooterProps> = ({ categories }) => {
  return (
    <footer className="w-full max-w-[1660px] mx-auto">
      <div className='bg-light-second rounded-xl pt-10 px-7 pb-5 flex flex-col'>
        <div className='w-full flex justify-between items-start mb-14'>
          <Logo />
          <div className='w-4/6 flex gap-5'>
            <div className='flex-grow'>
              <h3 className='text-light-text font-medium text-base mb-5'>Каталог продукции</h3>
              <div className='grid grid-cols-2 gap-y-2'>
                {categories.map((e) => {
                  return (
                    <FooterLink key={e.id} name={e.name} />
                  )
                })}
              </div>
            </div>
            <div className='flex-grow'>
              <h3 className='text-light-text font-medium text-base mb-5'>Общая информация</h3>
              <div className='grid grid-cols-1 gap-y-2'>
                <FooterLink name='Бренды' />
                <FooterLink name='О компании' />
                <FooterLink name='Покупателям' />
                <FooterLink name='Контакты' />
              </div>
            </div>
          </div>
        </div>
        <div className='border-t-[1px] border-stroke w-full pt-4 flex justify-between items-center'>
          <div className='flex gap-5 text-primary text-sm'>
            <p>Договор оферты</p>
            <p>Политика конфиденциальности</p>
            <p>Пользовательское соглашение</p>
          </div>
          <p className='text-light-text text-sm'>© {new Date().getFullYear()}. Кавказ Маркет. Все права защищены</p>
        </div>
      </div>
      <p className='text-light-text text-xs my-5'>Обращаем ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации. Для получения подробной информации о наличии и стоимости указанных товаров и (или) услуг, пожалуйста, обращайтесь к менеджерам отдела клиентского обслуживания с помощью специальной формы связи или по телефону: <strong className='font-normal text-primary'>+7(961) 460-12-41</strong></p>
      {/* <div className="container">
        <div className="py-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <a href="/">
              <span className="text-2xl font-bold uppercase">LOGO</span>
            </a>
            <ul className="flex flex-col flex-wrap gap-4 text-sm font-medium uppercase sm:flex-row sm:items-center sm:gap-x-6 sm:gap-y-4">
              {categories.slice(0, 10).map((category) => (
                <li key={category.id}>
                  <a href="/">{category.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <hr className="my-4 sm:my-6" />
          <span className="block text-sm text-gray-500 sm:text-center">
            © {new Date().getFullYear()} Все права защищены.
          </span>
        </div>
      </div> */}
    </footer>
  );
};

export { Footer };
