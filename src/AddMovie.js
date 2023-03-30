import { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
    setName("");
    setPrice("");
  };

  return (
    <form style={formStyle} onSubmit={addMovie}>
      <label style={labelStyle}>Movie Name:</label>
      <input
        style={inputStyle}
        type="text"
        name="name"
        value={name}
        onChange={updateName}
      />
      <label style={labelStyle}>Price:</label>
      <input
        style={inputStyle}
        type="text"
        name="price"
        value={price}
        onChange={updatePrice}
      />
      <button style={buttonStyle}>Submit</button>
    </form>
  );
};

export default AddMovie;

const formStyle = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "500px",
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "5px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const labelStyle = {
  marginBottom: "5px",
};

const inputStyle = {
  padding: "10px",
  marginBottom: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#333",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
};
