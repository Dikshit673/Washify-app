import { FaStar } from 'react-icons/fa6';

export const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className='flex items-center gap-0.5'>
      {[...Array(Math.floor(rating))].map((_, index) => (
        <FaStar key={index} className='text-prime-700 size-5' />
      ))}
      {[...Array(Math.ceil(5 - rating))].map((_, index) => (
        <FaStar key={index} className='text-second-500 size-5' />
      ))}
    </div>
  );
};
