import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({path}) => {
  if(!path) return null;
  return (
    <div className="shrink-0 w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 hover:scale-105 transition-transform duration-200 cursor-pointer">
      <img className="w-full h-auto rounded-xl" src={IMG_CDN_URL + path} alt="movie card" />
    </div>
  )
}

export default MovieCard