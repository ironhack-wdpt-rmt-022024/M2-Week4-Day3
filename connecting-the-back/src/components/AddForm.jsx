import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const nav = useNavigate();
  const handleCreateProduct = async (event) => {
    //stop the form from refreshing
    event.preventDefault();
    const newProduct = { title, description, thumbnail };
    try {
      const response = await axios.post(
        "https://dummyjson.com/products/add",
        newProduct
      );
      console.log(response);
      nav("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleCreateProduct}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </label>
      <label>
        Image:
        <input
          type="text"
          value={thumbnail}
          onChange={(e) => {
            setThumbnail(e.target.value);
          }}
        />
      </label>
      <button>Create</button>
    </form>
  );
};
