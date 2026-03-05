// 

import React, { useRef } from "react";
import langConstants from "../utils/langConstants";
import { useSelector } from "react-redux";
import { client } from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGPTMovies } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.appConfig.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMoviesTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchBar = async () => {
    const query =
      "Act as a Movie Recommendation system for " +
      searchText.current.value +
      "which will suggest some movie's name. Only give me names of 5 movies. also the name sof the movie will be comma separated like the example given ahead. Example: Movie1, Movie2, Movie3, Movie4, Movie5" +
      ". i want my data in a string format with comma separated values and no other text should be there. Also don't even tell me that you are a AI model or any other thing, just give me the data in the format i asked for. not even Arrr, here be yer list o' Hollywood thriller movies:.";

    const response = await client.responses.create({
      model: "gpt-3.5-turbo",
      instructions: "You are a coding assistant that talks like a pirate",
      input: query,
    });

    if (!response.output_text) {
      alert("No response from OpenAI");
      return;
    }

    const gptResponse = response.output_text.split(",");

    const data = await Promise.all(
      gptResponse.map((movie) => searchMoviesTMDB(movie))
    );

    dispatch(addGPTMovies({ movieNames: gptResponse, movieResults: data }));
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full">
      <div className="flex justify-center items-center w-full px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-4xl">
          {/* Input Field */}
          <input
            ref={searchText}
            className="w-full sm:flex-1 px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5 rounded-lg border border-gray-600 hover:border-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-700/50 bg-black/60 text-sm sm:text-base md:text-lg text-white placeholder:text-gray-400 transition-all duration-200"
            type="text"
            placeholder={langConstants[langKey].gptSearchPlaceholder}
          />

          {/* Search Button */}
          <button
            type="submit"
            onClick={handleGPTSearchBar}
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer text-sm sm:text-base md:text-lg whitespace-nowrap shadow-lg hover:shadow-red-500/50"
          >
            {langConstants[langKey].search}
          </button>
        </div>
      </div>
    </form>
  );
};

export default GPTSearchBar;