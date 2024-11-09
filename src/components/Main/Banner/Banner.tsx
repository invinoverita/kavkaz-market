'use client';

import useEmblaCarousel from 'embla-carousel-react';

import Autoplay from 'embla-carousel-autoplay';

const Banner = () => {
  const [emblaRef] = useEmblaCarousel({}, [Autoplay()]);

  return (
    <div className="w-full max-w-[1660px] mx-auto mb-20">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="backface-hidden flex h-[480px] touch-pan-y">
          {[1, 2, 3].map((index) => (
            <div className="relative min-w-0 flex-[0_0_100%]" key={index}>
              <div className='w-full h-full bg-slide-bg bg-center bg-no-repeat bg-cover rounded-xl p-14'>
                <h1 className='text-black font-medium text-6xl mb-7'>Собрали для вас все <br /> предложения в одном <br /> месте</h1>
                <p className='text-light-text font-medium text-lg mb-14'>Новые акции каждую неделю, следите на сайте</p>
                <button className='py-5 px-8 rounded-md font-semibold text-white text-base bg-primary cursor-pointer'>
                  Перейти к акциям
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Banner };
