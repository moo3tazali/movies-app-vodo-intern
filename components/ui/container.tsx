// Interface defining the props for the Container component
interface ContainerProps {
  children: React.ReactNode;
}

// Container component definition
export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className='mx-auto max-w-screen-xl'>{children}</div>;
  // Return a div acting as a container with centered margin and maximum width
};
