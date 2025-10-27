import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [mustWatch, setMustWatch] = useState([]); 


  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };
  
  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

    const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  //console.log(myReviews);

  const addToMustWatch = (movie) => {
    let updatedMustWatch = [...mustWatch];
    if (!mustWatch.includes(movie.id)) {
      updatedMustWatch.push(movie.id);
    }
    setMustWatch(updatedMustWatch);

     console.log("Must Watch list:", updatedMustWatch);
    
  };
  /*
  import React, { useContext } from "react";
import { useQueries } from "@tanstack/react-query";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { getMovie } from "../api/tmdb-api";
import RemoveFromMustWatch from "../components/cardIcons/removeFromMustWatch";

const MustWatchPage = () => {
  const { mustWatch } = useContext(MoviesContext);

  // 如果没有电影
  if (mustWatch.length === 0) {
    return <h3 style={{ padding: "1rem" }}>No movies in your Must Watch list yet!</h3>;
  }

  // 对 mustWatch 中的每个 ID 发请求
  const mustWatchQueries = useQueries({
    queries: mustWatch.map((id) => ({
      queryKey: ["movie", { id }],
      queryFn: getMovie,
    })),
  });

  // 检查加载状态
  const isLoading = mustWatchQueries.some((q) => q.isPending);
  if (isLoading) return <Spinner />;

  const movies = mustWatchQueries
    .map((q) => q.data)
    .filter((m) => m !== undefined);

  return (
    <PageTemplate
      title="Must Watch Movies"
      movies={movies}
      action={(movie) => <RemoveFromMustWatch movie={movie} />}
    />
  );
};

export default MustWatchPage;

  */


 return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        mustWatch,
        addToMustWatch,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );

};

export default MoviesContextProvider;
