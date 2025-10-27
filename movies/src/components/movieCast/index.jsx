import React from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../spinner";               
import { getMovieCredits } from "../../api/tmdb-api";
import { Link } from "react-router";



const MovieCast = ({ movieId }) => {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["credits", { id: movieId }],
    queryFn: getMovieCredits,
  });

  if (isPending) return <Spinner />;
  if (isError) return <p>Error: {error.message}</p>;

  const cast = data.cast || [];

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-3">Cast</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {cast.slice(0, 12).map((actor) => (
          <div key={actor.id} className="text-center">
            <Link to={`/person/${actor.id}`}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : "https://via.placeholder.com/200x300?text=No+Image"
                }
                alt={actor.name}
                className="rounded-lg shadow-md w-full object-cover"
              />
              <p className="font-semibold mt-2">{actor.name}</p>
              <p className="text-sm text-gray-500">{actor.character}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCast;
