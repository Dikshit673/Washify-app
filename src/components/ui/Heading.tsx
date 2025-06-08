interface HeadingProps {
  heading1: string;
  heading2: string;
}

export const Heading = ({ heading1, heading2 }: HeadingProps) => {
  return (
    <>
      <h4 className='text-prime-300 mb-2 text-center text-2xl font-normal capitalize'>
        {heading1}
      </h4>
      <h2 className='text-prime-200 text-center text-4xl font-normal capitalize md:text-5xl'>
        {heading2}
      </h2>
    </>
  );
};
