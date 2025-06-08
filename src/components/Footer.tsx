import { memo } from 'react';
import { LuMail, LuPhone } from 'react-icons/lu';
import { MdLocationPin } from 'react-icons/md';
import {
  FaEnvelopeOpenText,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa6';

import { Button, Input, Link } from './ui';

interface FooterHeadingProps {
  title: string;
}

const FooterHeading = memo(({ title }: FooterHeadingProps) => {
  return (
    <>
      <h3 className='text-prime-200 text-xl font-semibold uppercase'>
        {title}
      </h3>
      <hr className='border-t-prime-200 mb-4 border-t-2' />
    </>
  );
});

const Footer = memo(() => {
  return (
    <footer>
      <section className='bg-second-300 py-12'>
        <div className='mx-auto w-9/10'>
          <div className='grid grid-cols-1 gap-4 *:mb-4 md:grid-cols-2 lg:grid-cols-4'>
            <div className='order-1'>
              <FooterHeading title='why washify?' />
              <p className='text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                officia laudantium quas sequi minus accusantium
                <br />
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis praesentium laboriosam doloremque assumenda!
              </p>
            </div>
            <div className='order-2'>
              <FooterHeading title='quick links' />
              <ul className='*:hover:text-prime-200 list-["➞"] columns-2 space-y-1.5 px-4 text-base *:cursor-pointer *:px-1'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className='order-3 md:order-4'>
              <FooterHeading title='get in touch' />
              <ul className='*:hover:text-prime-200 space-y-1.5'>
                <li className='flex items-center gap-2'>
                  <MdLocationPin className='size-5 shrink-0 text-inherit' />
                  <span>abc, xyz, 123456</span>
                </li>
                <li className='flex items-center gap-2'>
                  <LuPhone className='size-5 shrink-0 text-inherit' />
                  <span>+1234567890</span>
                </li>
                <li className='flex items-center gap-2'>
                  <LuMail className='size-5 shrink-0 text-inherit' />
                  <span>abc@example.com</span>
                </li>
              </ul>
            </div>
            <div className='order-4 md:order-3'>
              <FooterHeading title='newsletter' />
              <div className='my-4'>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  label=''
                  placeholder='Enter your email'
                  value=''
                  onChange={() => {}}
                />
                <Button className='mt-4'>Subscribe</Button>
              </div>
              <ul>
                <li className='flex items-center gap-2'>
                  <FaEnvelopeOpenText className='size-6 shrink-0' />
                  <span className='text-base'>
                    Sign up with your name and email to get updates fresh
                    updates.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <hr className='border-t-prime-200 my-4 border-t-2' />
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-base'>
                &copy; {new Date().getFullYear()} Washify. All rights reserved.
              </p>
            </div>
            <div className='*:text-prime-200 flex items-center gap-2 *:size-5 *:shrink-0 *:cursor-pointer *:stroke-current *:stroke-1'>
              <Link to='#'>
                <FaTwitter />
              </Link>
              <Link to='#'>
                <FaFacebook />
              </Link>
              <Link to='#'>
                <FaInstagram />
              </Link>
              <Link to='#'>
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
});

export default Footer;
