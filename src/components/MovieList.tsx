import { useEffect, useRef, useState } from "react";
import GlobalApi from "../Service/GlobalApi";
import { MovieCard } from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { HrMovieCard } from "./HrMovieCard";

export const MovieList = ({
  genreId,
  index_,
}: {
  genreId: number;
  index_: number;
}) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  interface Movie {
    poster_path: string;
    backdrop_path: string;
  }
  const elementRef = useRef(null);

  const scrollRight = (element: HTMLElement) => {
    element.scrollLeft += 500;
  };

  const scrollLeft = (element: HTMLElement) => {
    element.scrollLeft -= 500;
  };
  const getMovieByGenreId = async () => {
    const response = await GlobalApi.getMovieByGenreId(genreId);
    setMovieList(response.data.results);
  };

  return (
    <div className="relative">
      <HiChevronLeft
        className="hidden md:block text-white text-3xl absolute top-1/2 -left-6 -translate-y-1/2 
      cursor-pointer bg-transparent"
        onClick={() => elementRef.current && scrollLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-3xl absolute top-1/2 -translate-y-1/2 
        cursor-pointer -right-8 bg-transparent"
        onClick={() => elementRef.current && scrollRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto gap-8 scrollbar-none p-4 scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item: Movie) => (
          <>
            {index_ % 3 == 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard movie={item.poster_path} />
            )}
          </>
        ))}
      </div>
    </div>
  );
};
