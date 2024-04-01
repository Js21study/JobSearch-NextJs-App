'use client';
import React from 'react';
import Lottie from 'lottie-react';

const LottieImage = ({ image }: any) => {
  return <Lottie animationData={image} />;
};

export default LottieImage;
