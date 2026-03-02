import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({path}) => {
  return (
    <div>
        <div className="w-41 hover:scale-103 transition-transform duration-200 cursor-pointer">
            <img className="rounded-xl" src={IMG_CDN_URL + path} alt="movie card" />
        </div>
    </div>
  )
}

export default MovieCard