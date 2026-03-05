import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    if (!movies) {
        return <div className="text-white px-4 sm:px-6 md:px-8 lg:px-12">Loading movies...</div>;
    }

  return (
    <div className="pb-6 sm:pb-8 md:pb-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-6 md:px-8 lg:px-12 mb-4">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl pb-2 sm:pb-0 text-white">{title}</h1>
        <button className="px-4 sm:px-5 py-2 text-white rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm sm:text-base">See All &gt; </button>
      </div>
      <div className="px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 overflow-x-scroll p-4 sm:p-5 md:p-6 scrollbar-hide">
          {movies.map((movie) => (
            <MovieCard key={movie.id} path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
