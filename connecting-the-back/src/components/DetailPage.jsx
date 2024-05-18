import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const DetailPage = () => {
  const { id } = useParams();
  const [oneProduct, setOneProduct] = useState({});
  useEffect(() => {
    const getOneProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        console.log(response.data);
        setOneProduct(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOneProduct();
  }, [id]);

  const handleDelete = async (productId) => {
    try {
      const res = await axios.delete(
        `https://dummyjson.com/products/${productId}`
      );
      console.log("inside the delete request", res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>{oneProduct.title}</h2>
      <img src={oneProduct.thumbnail} alt={oneProduct.title} />
      <Link to={`/update-product/${oneProduct.id}`}>
        <button>Update Product</button>
      </Link>
      <button
        onClick={() => {
          handleDelete(oneProduct.id);
        }}
      >
        Delete Product
      </button>
    </div>
  );
};
