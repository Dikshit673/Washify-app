import CarWash1 from '@/assets/images/slideshow/car-wash.jpg';
import CarWash2 from '@/assets/images/slideshow/interior.jpg';
import CarWash3 from '@/assets/images/slideshow/sponge-car-wash.jpg';

type HeroItemType = {
  id: number;
  imgSrc: string;
  imgAlt: string;
  title: string;
};

export const heroArr: HeroItemType[] = [
  {
    id: 0,
    imgSrc: CarWash1,
    imgAlt: 'car wash',
    title: 'car wash',
  },
  {
    id: 1,
    imgSrc: CarWash2,
    imgAlt: 'interior',
    title: 'interior',
  },
  {
    id: 2,
    imgSrc: CarWash3,
    imgAlt: 'sponge car wash',
    title: 'sponge car wash',
  },
];
