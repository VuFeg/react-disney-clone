const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

export const MovieCard = ({ movie }: { movie: string }) => {
  return (
    <>
      <img
        src={IMAGE_BASE_URL + movie}
        alt=""
        className="w-[110px] md:w-[200px] object-cover rounded-lg cursor-pointer hover:border-[3px]
       border-gray-400 hover:scale-110 transition-all ease-in-out duration-200"
      />
    </>
  );
};
