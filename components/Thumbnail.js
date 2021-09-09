/* eslint-disable react/display-name */
import { ThumbUpIcon } from '@heroicons/react/outline';
import Image from 'next/dist/client/image';
import { forwardRef } from 'react';

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';

  return (
    <div ref={ref} className="px-3 py-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 w-full">
      {/* image */}
      <Image src={`${BASE_URL}${result.backdrop_path || result.poster_path}`} layout="intrinsic" width={1920} height={1080} alt="image" />

      <div className="p-2 max-w-full">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-xl text-white transition duration-100 ease-in group-hover:font-bold">{result.title || result.original_name}</h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.release_date || result.first_air_date} <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
