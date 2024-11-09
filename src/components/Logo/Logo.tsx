import dynamic from "next/dynamic";
import mountain from "public/icons/mountain.svg";

const Link = dynamic(() => import('../../components/Link/Link'), {
  ssr: false,
});

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <img src={mountain.src} />
      <div className='h-10 pl-3 ml-3 border-l-stroke border-l-2 flex flex-col justify-between items-center'>
        <h1 className="text-2xl leading-6 font-medium">Кавказ <strong className="font-medium text-primary">Маркет</strong></h1>
        <p className="text-light-text text-xs">здоровое питание с доставкой</p>
      </div>
    </Link>
  )
}

export { Logo }