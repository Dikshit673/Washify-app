import { cn } from '@/lib/utils';
import {
  ChangeEvent,
  LabelHTMLAttributes,
  OptionHTMLAttributes,
  ReactElement,
} from 'react';

const commonInputClass =
  'outline-prime-200 order-2 w-full rounded-lg border bg-prime-50 px-3 py-2';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  label: string;
  className?: string;
}

const Label = ({ htmlFor, label, className = '' }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={cn('order-1', className)}>
      {label}
    </label>
  );
};

type InputProps = {
  id: string;
  name: string;
  type: 'text' | 'tel' | 'email' | 'date' | 'password';
  label: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  id,
  name,
  type,
  label,
  required = false,
  placeholder = '',
  value,
  onChange,
}: InputProps) => {
  return (
    <div className='flex w-full flex-col gap-2'>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        autoComplete={type !== 'password' ? name : 'off'}
        onChange={onChange}
        className={cn(commonInputClass)}
      />
      <Label htmlFor={id} label={label} />
    </div>
  );
};

type TextAreaProps = {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const TextArea = ({
  id,
  name,
  label,
  required = false,
  placeholder = '',
  value,
  onChange,
}: TextAreaProps) => {
  return (
    <div className='flex w-full flex-col gap-2'>
      <textarea
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(commonInputClass, 'h-40 resize-none')}
      />
      <Label htmlFor={id} label={label} />
    </div>
  );
};

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  Value: string;
  Label: string;
}

export const Option = ({ Value, Label }: OptionProps) => {
  return <option value={Value}>{Label}</option>;
};

type SelectBoxProps = {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  optionValues: ReactElement<typeof Option>[];
};

export const Select = ({
  id,
  name,
  label,
  onChange,
  optionValues,
}: SelectBoxProps) => {
  return (
    <div className='flex w-full flex-col gap-2'>
      <select
        name={name}
        id={id}
        onChange={onChange}
        className={cn(commonInputClass)}
      >
        {optionValues}
      </select>
      <Label htmlFor={id} label={label} />
    </div>
  );
};
