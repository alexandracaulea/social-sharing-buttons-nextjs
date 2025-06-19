import { IconProps } from '@/types/icons';
import { cn } from '@/utils/cn';

const CopyIcon = ({ className, ...props }: IconProps) => (
  <svg
    {...props}
    width='24'
    height='27'
    className={cn('group', className)}
    viewBox='0 0 24 27'
    fill='none'
    focusable='false'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden>
    <path
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='stroke-gray-500 group-hover:stroke-purple-500'
      d='M19 8.867a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2ZM4.6 17.268a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2ZM19 25.667a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2ZM7.707 15.479l8.196 4.776M15.891 7.078l-8.184 4.776'
    />
  </svg>
);

CopyIcon.displayName = 'CopyIcon';
export default CopyIcon;
