import React from 'react';
import BannerSpash from './BannerSpash';
import { useLocation } from 'react-router-dom';

const BannerSpashConditional = () => {
  const location = useLocation();

  return location.pathname === '/' ? <BannerSpash /> : null;
};

export default BannerSpashConditional;
