import { MovieType } from '@/types/data'
import Image from 'next/image'
import React from 'react'

interface MoviePosterProps {
   movieData: MovieType;
   onClick?: () => void;
}

function MoviePoster({movieData, onClick}: MoviePosterProps) {
  return (
    <div onClick={onClick} className='flex flex-col gap-1 transition-transform duration-300 ease hover:transition-transform hover:cursor-pointer hover:scale-95 transform-gpu'>
      <div className='w-[250px] h-[360px] relative'>
        <Image alt="Poster" src={movieData.image} className="bg-gray-08 rounded-md shadow-md" fill />
      </div>
      <h5 className='flex mt-3 font-normal text-lg text-default-text'>{movieData?.title}</h5>
      <p className='flex font-extralight text-xs text-default-text'>{movieData?.slug}</p>
    </div>
  )
}

export default MoviePoster