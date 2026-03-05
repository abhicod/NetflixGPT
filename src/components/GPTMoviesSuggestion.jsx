import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMoviesSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames || !movieResults) return null;

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 pb-4">
      {movieNames.map((movie, index) => (
        <MovieList key={index} title={movie} movies={movieResults[index]} />
      ))}
    </div>
  );
};

export default GPTMoviesSuggestion;
