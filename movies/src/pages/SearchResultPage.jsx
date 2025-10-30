import React from "react";
import { useLocation } from "react-router";
import { useQuery } from "@tanstack/react-query";
import PageTemplate from "../components/templateMovieListPage";
import { searchMulti } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const SearchResultsPage = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q");

  
  if (!query || query.trim() === "") {
    return <h3 style={{ textAlign: "center", marginTop: "2rem" }}>Please enter a search term.</h3>;
  }

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["search", { query }],
    queryFn: searchMulti,
  });

  if (isLoading) return <Spinner />;
  if (isError)
    return (
      <h3 style={{ textAlign: "center", marginTop: "2rem", color: "red" }}>
        Error: {error.message}
      </h3>
    );

 
  const movies = data.results
    ? data.results.filter((item) => item.media_type === "movie")
    : [];

  if (movies.length === 0) {
    return (
      <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
        No movies found for “{query}”.
      </h3>
    );
  }

 
  const normalizedMovies = movies.map((m) => ({
    ...m,
    genre_ids: m.genre_ids || [],
  }));

  return (
    <PageTemplate
      title={`Search Results for “${query}”`}
      movies={normalizedMovies}
      action={() => null}
    />
  );
};

export default SearchResultsPage;
