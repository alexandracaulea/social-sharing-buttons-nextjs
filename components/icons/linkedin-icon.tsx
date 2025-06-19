import { IconProps } from '@/types/icons';
import { cn } from '@/utils/cn';

const LinkedinIcon = ({ className, ...props }: IconProps) => (
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
      d='M22.08 0H2.05C.957 0 0 .787 0 1.87v20.073C0 23.031.956 24 2.05 24h20.025c1.1 0 1.925-.976 1.925-2.057V1.87C24.006.788 23.175 0 22.08 0ZM7.44 20.005H4V9.315H7.44v10.69ZM5.84 7.69h-.025c-1.1 0-1.813-.82-1.813-1.845 0-1.044.731-1.844 1.856-1.844s1.813.794 1.838 1.844c0 1.026-.713 1.845-1.857 1.845Zm14.165 12.315h-3.438V14.16c0-1.4-.5-2.357-1.744-2.357-.95 0-1.513.643-1.763 1.269-.094.225-.12.531-.12.844v6.09H9.503V9.314h3.439v1.488c.5-.713 1.282-1.738 3.1-1.738 2.257 0 3.965 1.488 3.965 4.695v6.245Z'
    />
  </svg>
);

export default LinkedinIcon;
