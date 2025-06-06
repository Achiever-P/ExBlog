import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-white'>
      <div className='animate-spin rounded-full h-16 w-16 border-4 border-t-primary border-gray-200'></div>
    </div>
  );
};

export default Loader
