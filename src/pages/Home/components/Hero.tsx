import { memo } from 'react';
import { heroArr } from '@/pages/Home/data';
import { Carousel } from '@/components/ui';

const Hero = memo(() => {
  return (
    <section id='hero'>
      <Carousel length={heroArr.length} showDots={true} showControls={true}>
        {heroArr.map((item) => {
          const { id, imgSrc, title } = item;
          return (
            <li
              key={id}
              className='h-screen w-full shrink-0'
              style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className='text-prime-50 relative flex h-full flex-col justify-between capitalize *:px-2 *:py-1'>
                <p className='bg-second-400/20'>{title}</p>
              </div>
            </li>
          );
        })}
      </Carousel>
    </section>
  );
});

export default Hero;
