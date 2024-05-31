'use client';

// Interface defining the props for the Button component
interface ButtonProps {
  children: React.ReactNode; // Children elements to be rendered inside the button
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Optional click event handler function
  disabled?: boolean; // Optional boolean indicating if the button should be disabled
}

// Button component definition
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick} // Click event handler function
      disabled={disabled} // Disabled state based on the disabled prop
      className='inline-flex px-4 py-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gray-200 text-slate-900 shadow-sm hover:bg-gray-200/80'
      // Button styling classes
    >
      {children}
      {/* Render children elements inside the button */}
    </button>
  );
};
