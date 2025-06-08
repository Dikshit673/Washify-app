import { ChangeEvent, memo, useCallback, useState } from 'react';
import {
  Heading,
  Button,
  Input,
  Option,
  Select,
  TextArea,
} from '@/components/ui';

import CarWashing from '@/assets/images/homepage/car-washing.jpg';
import { TimeOptionsArr } from '@/pages/Home/data';

const Contact = memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    time: TimeOptionsArr[0],
    date: '',
    message: '',
  });

  const handleChange = useCallback(
    (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    },
    [formData]
  );

  const handleFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const entries = new FormData(e.currentTarget).entries();
      const data = Object.fromEntries(entries);
      console.log(data);
      alert('Form submitted');
      setFormData({
        name: '',
        phone: '',
        email: '',
        time: TimeOptionsArr[0],
        date: '',
        message: '',
      });
    },
    []
  );

  const { name, phone, email, time, date, message } = formData;
  return (
    <section className='py-8' id='contact'>
      <div className='mx-auto w-9/10'>
        <Heading heading1='Contact' heading2='Request car wash' />

        <div className='my-8 grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='mt-[5%] flex items-center justify-center'>
            <img
              src={CarWashing}
              alt='car wash'
              className='hover:border-second-200 h-80 w-80 rounded-lg border-2 border-transparent object-cover transition-all duration-150 ease-in hover:-translate-y-2 hover:shadow-2xl md:h-100 md:w-90'
            />
          </div>
          <div className='flex flex-col items-center gap-2'>
            <form onSubmit={handleFormSubmit} className='w-full max-w-90'>
              <div className='mt-8 flex w-full flex-col gap-4'>
                <Input
                  id='Contact-field-1'
                  name='name'
                  label='Name'
                  type='text'
                  placeholder='Enter your name'
                  required={true}
                  value={name}
                  onChange={handleChange}
                />
                <Input
                  id='Contact-field-2'
                  name='phone'
                  label='Phone'
                  type='tel'
                  placeholder='Enter your phone'
                  required={true}
                  value={phone}
                  onChange={handleChange}
                />
                <Input
                  id='Contact-field-3'
                  name='email'
                  label='Email'
                  type='email'
                  placeholder='Enter your email'
                  required={true}
                  value={email}
                  onChange={handleChange}
                />
                <div className='flex items-center gap-2'>
                  <Select
                    id='Contact-field-4'
                    name='time'
                    label='Time'
                    optionValues={TimeOptionsArr.map((option, index) => {
                      return (
                        <Option key={index} Value={option} Label={option} />
                      );
                    })}
                    value={time}
                    onChange={handleChange}
                  />
                  <Input
                    id='Contact-field-5'
                    name='date'
                    label='Date'
                    type='date'
                    placeholder='Enter your date'
                    required={true}
                    value={date}
                    onChange={handleChange}
                  />
                </div>
                <TextArea
                  id='Contact-field-6'
                  name='message'
                  label='Message'
                  placeholder='Enter your message'
                  value={message}
                  onChange={handleChange}
                />
                <Button type='submit' className='mt-4 w-fit'>
                  request
                </Button>
              </div>
            </form>
            <div className='mt-4 flex flex-col items-center gap-2'>
              <span className='text-xl font-normal'>
                To book an appointment, call:
              </span>
              <a href='tel:+123-456-7890' className='text-prime-200 text-3xl'>
                +123-456-7890
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
