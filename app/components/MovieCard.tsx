import Image from 'next/image';
import React from 'react';

const MovieCard = ({ movie }: any) => {
  return (
    <div
      key={movie.image}
      className="
        col-span-1 
        card-height
        relative
        h-[400px]
        xl:h-[425px]
        rounded-xl
    ">
      <Image 
        src={movie.image}
        alt={movie.alt}
        style={{ objectFit: 'cover'}}
        fill
        className="rounded-lg"
      />
    </div>
  )
}

export default MovieCard