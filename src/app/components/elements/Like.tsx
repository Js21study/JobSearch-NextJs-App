'use client';
import React, { useState } from 'react';
import LikeIcon from '../../assets/svg/like.svg';

interface LikeProps {
  id: string;
  isLiked: boolean;
}

const Like = ({ id, isLiked }: LikeProps) => {
  const likedJobsFromLS = () => {
    const data = localStorage.getItem('liked');
    return JSON.parse(data || '[]');
  };

  const clickLike = () => {
    const updatedLikedJobs = likedJobsFromLS();
    const isInArray = updatedLikedJobs.some((job: { id: string }) => job.id === id);

    if (!isInArray) {
      updatedLikedJobs.push({ id });
    } else {
      const filteredJobs = updatedLikedJobs.filter((job: { id: string }) => job.id !== id);
      updatedLikedJobs.length = 0;
      updatedLikedJobs.push(...filteredJobs);
    }

    localStorage.setItem('liked', JSON.stringify(updatedLikedJobs));
  };
  return (
    <div onClick={clickLike}>
      <LikeIcon
        className={`cursor-pointer hover:fill-[#2329D6] ${
          isLiked ? 'fill-[#2329D6]' : 'fill-slate-50'
        }`}
      />
    </div>
  );
};

export default Like;
