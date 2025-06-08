import { memo } from 'react';
import { Heading } from '@/components/ui';

import CarWash from '@/assets/images/icons/car-wash.svg';
import SeatClean from '@/assets/images/icons/seat-cleaning.svg';
import Vaccum from '@/assets/images/icons/vaccuming.svg';

interface ServiceCardProps {
  imgSrc: string;
  imgAlt: string;
  caption: string;
}

const ServicesCard = memo(({ imgSrc, imgAlt, caption }: ServiceCardProps) => {
  return (
    <figure className='flex shrink-0 flex-col items-center gap-4'>
      <img src={imgSrc} alt={imgAlt} className='size-40 object-cover' />
      <figcaption className='text-prime-200 text-2xl font-medium capitalize'>
        {caption}
      </figcaption>
    </figure>
  );
});

const Services = memo(() => {
  return (
    <section className='py-8' id='services'>
      <div className='mx-auto w-9/10'>
        <Heading heading1='Services' heading2='what we offer' />

        <div className='my-12 flex flex-wrap items-center justify-evenly gap-4'>
          <ServicesCard
            imgSrc={CarWash}
            imgAlt='car-wash'
            caption='Exterior washing'
          />
          <ServicesCard
            imgSrc={SeatClean}
            imgAlt='car-wash'
            caption='Seat cleaning'
          />
          <ServicesCard imgSrc={Vaccum} imgAlt='car-wash' caption='Vacuuming' />
        </div>
      </div>
    </section>
  );
});

export default Services;
