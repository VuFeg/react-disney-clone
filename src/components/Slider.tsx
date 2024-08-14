import { useEffect, useRef, useState } from "react";
import GlobalApi from "../Service/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
const screenWidth = window.innerWidth;

export const Slider = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  console.log(elementRef);
  interface Movie {
    backdrop_path: string;
  }
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getTrendingVideos();
  }, []);

  const getTrendingVideos = async () => {
    const response = await GlobalApi.getTrendingVideos;
    setMovieList(response.data.results);
  };

  const scrollRight = (element: HTMLElement) => {
    element.scrollLeft += screenWidth - 264;
  };

  const scrollLeft = (element: HTMLElement) => {
    element.scrollLeft -= screenWidth - 264;
  };

  return (
    <div className="">
      <HiChevronLeft
        className="hidden md:block text-white text-3xl absolute mt-[192px] mx-5 -translate-y-1/2 
      cursor-pointer bg-transparent"
        onClick={() => elementRef.current && scrollLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-3xl absolute mt-[192px] mx-5 -translate-y-1/2 
        cursor-pointer right-20 bg-transparent "
        onClick={() => elementRef.current && scrollRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item: Movie, index) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt=""
            className="min-w-full md:h-96 object-cover object-left-top mr-5 rounded-md hover:border-4 border-gray-400
            transition-all ease-in-out duration-200 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};
