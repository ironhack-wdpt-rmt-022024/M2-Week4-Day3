import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const UpdateForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const { productId } = useParams();

  useEffect(() => {
    const getOneProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${productId}`
        );
        console.log(response.data);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setThumbnail(response.data.thumbnail);
      } catch (err) {
        console.log(err);
      }
    };
    getOneProduct();
  }, [productId]);

  const handleUpdateProduct = async (event) => {
    //stop the form from refreshing
    event.preventDefault();
    const newProduct = { title, description, thumbnail };
    try {
      const response = await axios.put(
        `https://dummyjson.com/products/${productId}`,
        newProduct
      );
      console.log("this is the update", response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Update Form</h2>

      <form onSubmit={handleUpdateProduct}>
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
        <button>Update</button>
      </form>
    </div>
  );
};
