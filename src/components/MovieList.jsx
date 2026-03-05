import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);

    if (!movies) {
        return <div>Loading movies...</div>;
    }

  return (
    <div>
      <div className="pb-10">
       <div className="flex justify-between items-center px-10">
         <h1 className="font-bold text-3xl pb-2 text-white">{title}</h1>
         <button className="px-5 py-2 text-white rounded-lg">See All &gt; </button>
       </div>
        <div className="px-2 ">
          <div className="flex gap-6 overflow-x-scroll p-5 scrollbar-hide">
            {movies.map((movie) => (
            <MovieCard key={movie.id} path={movie.poster_path} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
