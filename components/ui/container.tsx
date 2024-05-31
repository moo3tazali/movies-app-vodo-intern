interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className='mx-auto max-w-screen-xl'>{children}</div>;
};
