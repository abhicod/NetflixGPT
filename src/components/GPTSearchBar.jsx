import { ChevronRightIcon } from "lucide-react";
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
      API_OPTIONS,
    );
    const json = await data.json();
    // console.log(json);
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
    console.log(gptResponse);

    const data = await Promise.all(
      gptResponse.map((movie) => searchMoviesTMDB(movie)),
    );
    console.log(data);

    dispatch(addGPTMovies({ movieNames: gptResponse, movieResults: data }));
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex justify-center items-center w-full">
          <div className="flex w-1/2 gap-2 m-1">
            <input
              ref={searchText}
              className="w-3/4 py-3 px-5 rounded-lg border border-gray-300 focus:outline-none bg-black/60 placeholder:text-gray-300 focus:text-white focus:border-white focus:ring-2 focus:ring-red-700 "
              type="text"
              placeholder={langConstants[langKey].gptSearchPlaceholder}
            />
            <button
              type="submit"
              onClick={handleGPTSearchBar}
              className="w-1/4 py-3 px-4 bg-red-600 text-white font-lg text-xl  rounded-lg flex items-center justify-center gap-1 hover:bg-red-700 transition-all duration-300 cursor-pointer"
            >
              {langConstants[langKey].search}{" "}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default GPTSearchBar;
