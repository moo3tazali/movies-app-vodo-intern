import { Loader } from '@/components/ui/loader';

// Loading component definition
const Loading = () => {
  return (
    <div className='p-0 sm:p-4 min-h-[calc(100vh-169px)] flex'>
      <Loader />
      {/* Loader component to indicate loading state */}
    </div>
  );
};

export default Loading;
