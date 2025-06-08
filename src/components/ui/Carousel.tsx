import { cn } from '@/lib/utils';
import {
  memo,
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { IconType } from 'react-icons';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

interface ControllerBtnProps {
  icon: IconType;
  action: string;
  className?: string;
}

const ControllerBtn = memo(
  ({ icon, action, className = '' }: ControllerBtnProps) => {
    const Icon = icon;
    return (
      <li
        data-action={action}
        className={cn(
          'bg-second-300/50 hover:bg-second-400 absolute top-1/2 -translate-y-1/2 cursor-pointer rounded-md px-1 py-3 text-xl',
          className
        )}
      >
        <Icon className='size-5' />
      </li>
    );
  }
);

interface CarouselControlsProps {
  onControlClick: (e: MouseEvent<HTMLUListElement>) => void;
}

const CarouselControls = memo(({ onControlClick }: CarouselControlsProps) => {
  return (
    <div className='absolute top-0 left-0 z-10 h-full w-full'>
      <ul className='relative h-full w-full' onClick={onControlClick}>
        <ControllerBtn icon={FaChevronLeft} action='prev' className='left-0' />
        <ControllerBtn
          icon={FaChevronRight}
          action='next'
          className='right-0'
        />
      </ul>
    </div>
  );
});

interface CarouselDotsProps {
  active: number;
  length: number;
  onDotClick: (e: MouseEvent<HTMLUListElement>) => void;
}

const CarouselDots = memo(
  ({ active, length, onDotClick }: CarouselDotsProps) => {
    return (
      <ul
        className='absolute bottom-4 left-1/2 z-10 flex w-full -translate-x-1/2 translate-y-1/2 items-center justify-center gap-2'
        onClick={onDotClick}
      >
        {Array.from({ length }, (_, i) => (
          <li
            key={i}
            data-index={i}
            className={cn(
              'bg-second-500 size-3 rounded-full transition-colors duration-150 ease-in',
              i === active && 'bg-prime-100'
            )}
          ></li>
        ))}
      </ul>
    );
  }
);

interface CarouselProps {
  length: number;
  children: ReactNode;
  showDots?: boolean;
  showControls?: boolean;
  className?: string;
}

export const Carousel = memo(
  ({
    length,
    children,
    showDots = false,
    showControls = false,
    className = '',
  }: CarouselProps) => {
    const [active, setActive] = useState<number>(0);

    useEffect(() => {
      const timer = 10000;
      const intervalId = setInterval(() => {
        setActive((prev) => (prev + 1) % length);
      }, timer);
      return () => clearInterval(intervalId);
    }, [length]);

    const handlePrevNext = useCallback(
      (e: MouseEvent<HTMLUListElement>) => {
        e.preventDefault();
        const element = e.target as HTMLElement;
        if (!element) return;

        const liElem = element.closest('li');
        if (!liElem) return;

        const dataAction = liElem.getAttribute('data-action');
        if (!dataAction) return;

        switch (dataAction) {
          case 'prev':
            setActive((prev) => (prev - 1 + length) % length);
            break;
          case 'next':
            setActive((prev) => (prev + 1) % length);
            break;
          default:
            break;
        }
      },
      [length]
    );

    const handleNavClick = useCallback((e: MouseEvent<HTMLUListElement>) => {
      e.preventDefault();
      console.log('nav clicked');
      const element = e.target as HTMLElement;
      const liElem = element.closest('li');
      if (!liElem) return;
      const dataIndex = liElem.getAttribute('data-index');
      if (!dataIndex) return;
      setActive(parseInt(dataIndex));
    }, []);

    return (
      <div
        className={cn(
          'relative overflow-hidden',
          showDots && 'pb-8',
          className
        )}
      >
        <ul
          className={cn(
            'flex h-full items-center transition-all duration-200 ease-in'
          )}
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {children}
        </ul>
        {showControls && <CarouselControls onControlClick={handlePrevNext} />}
        {showDots && (
          <CarouselDots
            active={active}
            length={length}
            onDotClick={handleNavClick}
          />
        )}
      </div>
    );
  }
);
