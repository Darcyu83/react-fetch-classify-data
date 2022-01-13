const API_KEY = `72caad34e2c43d870d78d98ae9a0980b`;

export async function getAPIData1() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error("에러발생함.");
  }
}

export async function getAPIData() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  )
    .then((respnse) => {
      return respnse;
    })
    .catch((error) => {
      console.log(error.name, error.message, error);
      throw new Error("AAA 에러");
    });

  const data = await response.json();
  return data.results;
}

export default async function getAPIDataPerCate() {
  const data = await getAPIData();
  const genre_action_id = 35;
  const genre_action = data.filter((movie: any) =>
    movie.genre_ids.includes(genre_action_id)
  );
  const genre_adventure_id = 14;
  const genre_adventure = data.filter((movie: any) =>
    movie.genre_ids.includes(genre_adventure_id)
  );
  return {
    genre_action, // ex) genre_id = 28
    genre_adventure,
  };
}
