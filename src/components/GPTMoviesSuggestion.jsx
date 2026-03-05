import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMoviesSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames || !movieResults) return null;

  return (
    <div className="">
      <div className="w-full px-8">
        {movieNames.map((movie, index) => (
          <MovieList key={index} title={movie} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GPTMoviesSuggestion;
