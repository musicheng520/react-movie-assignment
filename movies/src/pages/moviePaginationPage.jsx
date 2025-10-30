import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import { getMovies } from "../api/tmdb-api";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const MoviePaginationPage = ({ category, title, action }) => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movies", { category, page }],
    queryFn: getMovies,
    keepPreviousData: true,
  });

  if (isLoading) return <Spinner />;
  if (isError) return <h3 style={{ textAlign: "center" }}>{error.message}</h3>;

  const movies = data.results || [];

  return (
    <>
      <PageTemplate
        title={title}
        movies={movies}
        action={action || (() => null)}
      />
      <Stack alignItems="center" sx={{ mt: 3, mb: 5 }}>
        <Pagination
          count={Math.min(data.total_pages, 20)}  
          page={page}
          onChange={(e, value) => setPage(value)}
          color="primary"
          size="large"
        />
      </Stack>
    </>
  );
};

export default MoviePaginationPage;
