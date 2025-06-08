import { memo } from 'react';
import { FaQuoteLeft } from 'react-icons/fa6';

import { testimonialArr } from '@/pages/Home/data';
import { cn } from '@/lib/utils';
import { Heading, Carousel, StarRating } from '@/components/ui';

const Testimonials = memo(() => {
  return (
    <section className='py-8' id='testimonials'>
      <div className='mx-auto w-9/10'>
        <Heading heading1='Testimonial' heading2='what our clients says' />
        <div className='my-8 flex h-full flex-col items-center justify-center gap-4'>
          <Carousel
            length={testimonialArr.length}
            showDots={true}
            showControls={true}
            className='max-w-140'
          >
            {testimonialArr.map((item) => {
              const { id, name, description, rating } = item;

              return (
                <li
                  key={id}
                  className={cn(
                    'flex h-full w-full shrink-0 flex-col items-center justify-center gap-4 rounded-lg p-4 transition-all duration-150 ease-in'
                  )}
                >
                  <div className=''>
                    <FaQuoteLeft className='text-second-400 size-20 shrink-0' />
                  </div>
                  <p className='text-second-600 text-center text-lg italic'>
                    {' " '}
                    {description}
                    {' " '}
                  </p>
                  <div className='flex items-center gap-0.5'>
                    <StarRating rating={rating} />
                  </div>
                  <h3 className='text-prime-200 text-2xl font-semibold'>
                    - {name}
                  </h3>
                </li>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
});

export default Testimonials;
