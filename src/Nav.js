import { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <nav style={navStyle}>
      <h3 style={brandStyle}>Hello there!</h3>
      <ul style={listStyle}>
        <li style={listItemStyle}>List of Movies: {movies.length}</li>
      </ul>
    </nav>
  );
};

export default Nav;

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#333",
  color: "#fff",
  padding: "10px 20px",
};

const brandStyle = {
  margin: "0",
};

const listStyle = {
  listStyleType: "none",
  margin: "0",
  padding: "0",
};

const listItemStyle = {
  display: "inline-block",
  marginLeft: "20px",
};
