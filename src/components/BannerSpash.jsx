import React from 'react';
import { NavLink } from "react-router-dom";

const BannerSplash = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full  flex items-center justify-center">
          <NavLink to="/series">
            <img src="/splash/poster-1.png" alt="Image 1" className="h-full w-full object-contain" />
          </NavLink>
        </div>
        <div className="w-full  md:order-last flex items-center justify-center">
          <NavLink to="/movies">
            <img src="/splash/poster.png" alt="Image 1" className="h-full w-full object-contain" />
          </NavLink>
        </div>
      </div>
    </>
  );
};


export default BannerSplash;
