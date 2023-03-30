import { useState, createContext } from "react";
import MovieList from "./MovieList";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 23124,
    },
    {
      name: "Lord of the Rings",
      price: "$10",
      id: 2566124,
    },
    {
      name: "Room",
      price: "$10",
      id: 23524,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
