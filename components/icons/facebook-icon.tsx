import { IconProps } from '@/types/icons';
import { cn } from '@/utils/cn';

const FacebookIcon = ({ className, ...props }: IconProps) => (
  <svg
    {...props}
    className={cn('group', className)}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    focusable='false'
    aria-hidden>
    <path
      className='fill-gray-500 group-hover:fill-purple-500'
      fillRule='evenodd'
      clipRule='evenodd'
      d='M24 12.072C24 5.406 18.627 0 12 0S0 5.406 0 12.072C0 18.099 4.388 23.093 10.125 24v-8.436H7.077v-3.49h3.048v-2.66c0-3.025 1.792-4.698 4.533-4.698 1.313 0 2.686.236 2.686.236v2.972H15.83c-1.49 0-1.956.93-1.956 1.886v2.264h3.328l-.531 3.49h-2.796V24C19.613 23.094 24 18.1 24 12.072Z'
    />
  </svg>
);

export default FacebookIcon;
