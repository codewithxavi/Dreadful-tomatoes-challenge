import React from 'react';

const BannerSplash = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:order-last">
          <img src="/splash/poster-1.png" alt="Image 1" className="w-full" />
        </div>
        <div className="w-full md:w-1/2">
          <img src="/splash/poster.png" alt="Image 2" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default BannerSplash;
