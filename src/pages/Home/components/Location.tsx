import { memo } from 'react';
import { Heading } from '@/components/ui';

const Location = memo(() => {
  return (
    <section className='py-8' id='location'>
      <div className='mx-auto w-9/10'>
        <Heading heading1='Location' heading2='On the map' />

        <div className='my-4 flex items-center justify-center'>
          <iframe
            src='https://www.google.com/maps/embed?'
            className='h-[350px] w-full md:w-[600px]'
            style={{ border: '0' }}
            allowFullScreen={false}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </section>
  );
});

export default Location;
