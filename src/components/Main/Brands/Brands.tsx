import brand1 from "public/images/brands/Logo-1.svg"
import brand2 from "public/images/brands/Logo-2.svg"
import brand3 from "public/images/brands/Logo-3.svg"
import brand4 from "public/images/brands/Logo-4.svg"
import brand5 from "public/images/brands/Logo-5.svg"
import arrow from "public/icons/arrow-green.svg"
import { BrandCard } from "./Card/BrandCard"


const Brands = () => {
  return (
    <section className="w-full bg-light-second py-20 mb-24">
      <div className="w-full max-w-[1660px] mx-auto mb-24">
        <h2 className="text-black font-medium text-5xl mb-12">Популярные бренды</h2>
        <div className="flex justify-between items-center gap-5">
          <BrandCard src={brand1} />
          <BrandCard src={brand2} />
          <BrandCard src={brand3} />
          <BrandCard src={brand4} />
          <BrandCard src={brand5} />
          <div className="p-[25px] pb-11 h-full bg-primary flex items-start gap-5 w-fit rounded-md ">
            <p className="text-white font-medium text-xl leading-6">Все бренды продукции</p>
            <div className="rounded bg-white p-3">
              <img src={arrow.src} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Brands };
