const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

export const HrMovieCard = ({ movie }: { movie: any }) => {
  return (
    <section className="hover:scale-110 transition-all ease-in-out duration-200 cursor-pointer">
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        alt=""
        className="w-[110px] md:w-[260px] object-cover rounded-lg hover:border-[3px] border-gray-400 "
      />
      <h2 className="w-[110px] md:w-[260px] text-white mt-2">{movie.title}</h2>
    </section>
  );
};
