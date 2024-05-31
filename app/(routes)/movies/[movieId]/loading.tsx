import { Loader } from '@/components/ui/loader';

const Loading = () => {
  return (
    <div className='p-0 sm:p-4 min-h-[calc(100vh-169px)] flex'>
      <Loader />
    </div>
  );
};

export default Loading;
