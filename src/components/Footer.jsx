import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-white">
      <img src="/general/logo/deadful_tomatoes.png" alt="Logo" className="mx-auto mb-4" />
      <div className="flex justify-center mb-12 mt-12">
        <button className="mr-2">
            <img src="/general/button/google play.svg" alt="Google play logo" />
        </button>
        <button className="ml-2">
        <img src="/general/button/app store.svg" alt="App store logo" />
        </button>
      </div>
      <p className='pb-12'>© Copyright 2022 Dreadful Tomatoes. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
