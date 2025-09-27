import { memo } from 'react';
import { FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa';

import { plansArr } from '@/pages/Home/data';
import { Button, Heading } from '@/components/ui';

const Plans = memo(() => {
  return (
    <section className='py-8' id='plans'>
      <div className='mx-auto w-9/10'>
        <Heading heading1='Plans' heading2='choose your plan' />

        <div className='my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
          {plansArr.map((plan) => {
            const { id, title, price, currency, features } = plan;
            return (
              //
              <div
                key={id}
                className='hover:border-second-200 bg-prime-50 flex flex-col items-center justify-center gap-4 rounded-lg border-1 border-gray-200 px-4 py-8 transition-all duration-150 ease-in hover:-translate-y-2 hover:shadow-2xl'
              >
                <h3 className='text-prime-200 text-3xl font-normal'>{title}</h3>
                <h2 className='text-prime-950 text-5xl font-medium'>
                  {currency}
                  {price}
                </h2>
                <ul className='flex flex-col gap-2'>
                  {features.map((feature, index) => {
                    const { title, isAvailable } = feature;
                    return (
                      <li
                        key={index}
                        className='flex items-center gap-2 text-lg'
                      >
                        {isAvailable ? (
                          <FaRegCheckCircle className='text-prime-500' />
                        ) : (
                          <FaRegTimesCircle className='text-prime-300' />
                        )}

                        <span>{title}</span>
                      </li>
                    );
                  })}
                </ul>
                <Button className='mt-4'>book now</Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default Plans;
