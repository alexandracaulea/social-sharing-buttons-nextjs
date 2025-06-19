import { IconProps } from '@/types/icons';
import { cn } from '@/utils/cn';

const TwitterIcon = ({ className, ...props }: IconProps) => (
  <svg
    {...props}
    className={cn('group', className)}
    width='23'
    height='20'
    viewBox='0 0 23 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    focusable='false'
    aria-hidden>
    <path
      className='fill-gray-500 group-hover:fill-purple-500'
      d='m7.278 0 5.025 6.393L18.113 0h3.528l-7.703 8.473L23 20h-7.098l-5.558-6.99L3.984 20H.454L8.7 10.94 0 0h7.278ZM6.215 1.925H4.12L16.877 17.97h1.955L6.215 1.925Z'
    />
  </svg>
);

export default TwitterIcon;
