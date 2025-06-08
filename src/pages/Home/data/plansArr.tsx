type PlanItemType = {
  id: number;
  title: string;
  currency: string;
  price: number;
  features: {
    title: string;
    isAvailable: boolean;
  }[];
};

export const plansArr: PlanItemType[] = [
  {
    id: 0,
    title: 'Basic cleaning',
    currency: '$',
    price: 14,
    features: [
      { title: 'Seat Washing', isAvailable: true },
      { title: 'Vacuum Cleaning', isAvailable: true },
      { title: 'Exterior Cleaning', isAvailable: true },
      { title: 'Interior Wet Cleaning', isAvailable: false },
      { title: 'Window Wiping', isAvailable: false },
    ],
  },
  {
    id: 1,
    title: 'Executive cleaning',
    currency: '$',
    price: 25,
    features: [
      { title: 'Seat Washing', isAvailable: true },
      { title: 'Vacuum Cleaning', isAvailable: true },
      { title: 'Exterior Cleaning', isAvailable: true },
      { title: 'Interior Wet Cleaning', isAvailable: true },
      { title: 'Window Wiping', isAvailable: false },
    ],
  },
  {
    id: 2,
    title: 'Presidential cleaning',
    currency: '$',
    price: 35,
    features: [
      { title: 'Seat Washing', isAvailable: true },
      { title: 'Vacuum Cleaning', isAvailable: true },
      { title: 'Exterior Cleaning', isAvailable: true },
      { title: 'Interior Wet Cleaning', isAvailable: true },
      { title: 'Window Wiping', isAvailable: true },
    ],
  },
];
