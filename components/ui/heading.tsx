interface HeadingProps {
  title: string; // Title of the heading
  description: string; // Description under the heading
  className?: string; // Optional additional CSS classes
}

// Heading component definition using React Functional Component with HeadingProps
export const Heading: React.FC<HeadingProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div className={className}>
      <h2 className='text-3xl font-bold tracking-tight capitalize'>{title}</h2>
      {/* Heading element with styling for title */}

      <p className='text-sm text-white/75'>{description}</p>
      {/* Paragraph element with styling for description */}

      <hr className='my-5 border-white/50' />
      {/* Horizontal rule for visual separation */}
    </div>
  );
};
