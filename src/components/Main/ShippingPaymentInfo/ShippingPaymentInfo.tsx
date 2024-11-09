import dynamic from "next/dynamic";
import arrow from "public/icons/arrow-green.svg";

const Link = dynamic(() => import('src/components/Link/Link'), {
  ssr: false,
});

export const ShippingPaymentInfo = () => {
  return (
    <section className="w-full max-w-[1660px] mx-auto mb-20 flex items-center gap-5">
      <Link href="/">
        <div className="h-fit bg-payment bg-cover p-10 flex flex-col items-start w-[540px] rounded-xl">
          <div className="mb-40">
            <p className="font-medium text-white text-sm uppercase mb-2">как купить</p>
            <h3 className="font-medium text-3xl text-white">Варианты оплаты</h3>
          </div>
          <div className="rounded bg-white p-4">
            <img src={arrow.src} />
          </div>
        </div>
      </Link>
      <Link href="/">
        <div className="h-fit bg-delivery bg-cover p-10 flex flex-col items-start w-[540px] rounded-xl">
          <div className="mb-40">
            <p className="font-medium text-white text-sm uppercase mb-2">как получить</p>
            <h3 className="font-medium text-3xl text-white">Варианты доставки</h3>
          </div>
          <div className="rounded bg-white p-4">
            <img src={arrow.src} />
          </div>
        </div>
      </Link>
      <Link href="/">
        <div className="h-fit bg-sertificates bg-cover p-10 flex flex-col items-start w-[540px] rounded-xl">
          <div className="mb-40">
            <p className="font-medium text-white text-sm uppercase mb-2">гарантии</p>
            <h3 className="font-medium text-3xl text-white">Сертификаты на продукцию</h3>
          </div>
          <div className="rounded bg-white p-4">
            <img src={arrow.src} />
          </div>
        </div>
      </Link>
    </section>
  )
}
