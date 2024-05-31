interface HeadingProps {
  title: string;
  description: string;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div className={className}>
      <h2 className='text-3xl font-bold tracking-tight capitalize'>{title}</h2>
      <p className='text-sm text-white/75'>{description}</p>
      <hr className='my-5 border-white/50' />
    </div>
  );
};
