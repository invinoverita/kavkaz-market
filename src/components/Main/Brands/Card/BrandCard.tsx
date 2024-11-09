import dynamic from 'next/dynamic';

const Link = dynamic(() => import('src/components/Link/Link'), {
  ssr: false,
});

const BrandCard = ({ src }: { src: any }) => {
  return (
    <Link href="/">
      <div className="py-8 px-16 bg-white border border-light-second">
        <img src={src.src} />
      </div>
    </Link>
  )
}

export { BrandCard }