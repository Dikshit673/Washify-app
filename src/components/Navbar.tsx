import { memo, useState } from 'react';
import { FaBars, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import { LuClock, LuMail, LuPhone } from 'react-icons/lu';
import { IconType } from 'react-icons';

import BrandIcon from '@/assets/icons/Washify';
import { cn } from '@/lib/utils';
import { Button, Link } from './ui';

type NavCardProps = {
  icon: IconType;
  title: string;
  description: string;
};

const NavCard = memo(({ icon, title, description }: NavCardProps) => {
  const Icon = icon;
  return (
    <div className='flex items-center gap-2'>
      <div className='bg-prime-300 flex items-center justify-center rounded-full p-2'>
        <Icon className='text-prime-50 size-8 shrink-0 font-bold' />
      </div>
      <div>
        <h5 className='text-prime-200 text-xl font-semibold capitalize'>
          {title}
        </h5>
        <small className='text-sm'>{description}</small>
      </div>
    </div>
  );
});

const Nav1 = memo(() => {
  return (
    <section className='bg-second-300 hidden md:block'>
      <div className='mx-auto w-9/10'>
        <div className='flex items-center justify-between gap-2'>
          <h4 className='text-prime-200 text-3xl font-semibold capitalize'>
            GoWashify
          </h4>
          <div className='flex w-fit items-center justify-between gap-2 py-4 lg:gap-6'>
            <NavCard
              icon={LuClock}
              title='Opening hours'
              description='Mon-Fri, 8:00 - 9:00'
            />
            <NavCard
              icon={LuPhone}
              title='call us'
              description='+1 222-222-222'
            />
            <NavCard
              icon={LuMail}
              title='email us'
              description='supreme@example.com'
            />
          </div>
        </div>
      </div>
    </section>
  );
});

type NavListItemProps = {
  title: string;
  href: string;
};

const NavListItem = memo(({ title, href }: NavListItemProps) => {
  return (
    <li className='hover:bg-prime-200 hover:text-prime-50 w-full rounded-lg px-3 py-1 text-center capitalize transition-colors duration-150 ease-in'>
      <Link to={href}>{title}</Link>
    </li>
  );
});

const Nav2 = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHeader = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='border-b-second-400 sticky top-0 left-0 z-20 w-full border-b'>
      <section className='bg-prime-50'>
        <div className='mx-auto w-9/10'>
          <div className='relative flex items-center justify-between gap-4 py-2'>
            <div className='p-1'>
              <BrandIcon className='text-prime-200 hover:text-prime-950' />
            </div>
            {/* sm hidden md visible */}
            <div className='hidden md:block'>
              <ul className='text-prime-950 flex items-center justify-between gap-2 rounded-lg text-lg shadow-2xl'>
                <NavListItem title='Home' href='#home' />
                <NavListItem title='About' href='#about' />
                <NavListItem title='Services' href='#services' />
                <NavListItem title='Price' href='#plans' />
                <NavListItem title='Contact' href='#contact' />
              </ul>
            </div>

            {/* sm visible md hidden */}
            <div
              className={cn(
                'absolute top-full right-0 z-20 max-w-70 min-w-30 md:hidden',
                isOpen ? 'block' : 'hidden'
              )}
            >
              <ul className='*:shadow-second-200 bg-prime-50 text-prime-950 flex w-45 flex-col rounded-lg border border-b px-2 py-4 text-lg shadow-2xl *:shadow-md'>
                <NavListItem title='Home' href='#home' />
                <NavListItem title='About' href='#about' />
                <NavListItem title='Services' href='#services' />
                <NavListItem title='Price' href='#plans' />
                <NavListItem title='Contact' href='#contact' />
                <span></span>
              </ul>
            </div>
            <div className='*:text-prime-200 flex items-center gap-4 *:*:size-5 *:*:shrink-0 *:cursor-pointer *:*:stroke-current *:*:stroke-1'>
              <Link to='#'>
                <FaTwitter />
              </Link>
              <Link to='#'>
                <FaFacebook />
              </Link>
              <Link to='#'>
                <FaInstagram />
              </Link>
              <Button type='button' variant='ghost' onClick={toggleHeader}>
                <FaBars />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
});

const Navbar = memo(() => {
  return (
    <>
      <Nav1 />
      <Nav2 />
    </>
  );
});

export default Navbar;
