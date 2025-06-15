import { memo } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Garage from '@/assets/images/homepage/garage.jpg';
import { Button, Heading, Link } from '@/components/ui';

const About = memo(() => {
  return (
    <section className='py-8' id='about'>
      <div className='mx-auto w-9/10'>
        <Heading heading1='About' heading2='GoWashify ' />
        <div className='my-8 grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='mt-[5%] flex items-center justify-center'>
            <img
              src={Garage}
              alt='engine'
              className='hover:border-second-200 h-80 w-80 rounded-lg border-2 border-transparent object-cover transition-all duration-150 ease-in hover:-translate-y-2 hover:shadow-2xl md:h-100 md:w-90'
            />
          </div>
          <div className='space-y-6'>
            <h3 className='text-prime-200 mt-6 text-3xl font-normal capitalize md:text-4xl'>
              introduction
            </h3>
            <p className='max-w-100'>
              Supreme Car Wash offers premium car cleaning services, providing
              meticulous attention to detail to ensure your vehicle shines like
              new. Our experienced team uses top-quality products and advanced
              techniques to deliver superior results. Visit us today for a
              professional car wash experience that leaves your vehicle looking
              pristine inside and out.
            </p>

            <Button>
              <Link to='#location'>
                <span className='inline-flex items-center gap-2'>
                  <span>View on map</span>
                  <BsArrowRight className='text-prime-50 size-6 shrink-0' />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
