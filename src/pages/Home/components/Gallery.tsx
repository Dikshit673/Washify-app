import { memo } from 'react';
import { Heading } from '@/components/ui';
import { galleryArr } from '@/pages/Home/data';

const Gallery = memo(() => {
  return (
    <section className='py-8' id='gallery'>
      <div className='mx-auto w-9/10'>
        <Heading heading1='Gallery' heading2='our car wash' />
        <div className='my-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {galleryArr.map((item) => {
            const { id, imgSrc, imgAlt } = item;
            return (
              <div key={id} className='overflow-hidden rounded-lg shadow-md'>
                <img
                  src={imgSrc}
                  alt={imgAlt}
                  className='h-60 w-full object-cover object-center transition-transform duration-300 hover:scale-105'
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default Gallery;
