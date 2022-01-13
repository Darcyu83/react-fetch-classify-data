import { useEffect, useState } from "react";
import getAPIData from "./api";

function PracticeComp() {
  const [movieData, setMovieData] = useState<{
    genre_action: [];
    genre_adventure: [];
  }>();

  async function setMovieDataFromAPI() {
    const data = await getAPIData();
    setMovieData(data);
  }

  useEffect(() => {
    setMovieDataFromAPI();
  }, []);

  return (
    <div>
      <div>
        <h1>Genre : Action </h1>
        {movieData?.genre_action.map((movie: any, idx: number) => (
          <p key={idx}>{movie.title}</p>
        ))}
      </div>
      <hr></hr>
      <div>
        <h1>Genre : Adventure </h1>
        {movieData?.genre_adventure.map((movie: any, idx: number) => (
          <p key={idx}> {movie.title}</p>
        ))}
      </div>
      <hr></hr>
      <div>
        <h1>Genre : Combine Data </h1>
        {movieData?.genre_adventure
          .concat(movieData?.genre_action)
          .map((movie: any, idx: number) => (
            <p key={idx}>{movie.title}</p>
          ))}
      </div>
    </div>
  );
}

export default PracticeComp;
