import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Cart = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/carts/${id}`);
        const parsed = await response.json();
        console.log(parsed);
        parsed.products.forEach((productInformation) => {
          fetch(
            `https://fakestoreapi.com/products/${productInformation.productId}`
          )
            .then((res) => {
              return res.json();
            })
            .then((parsed) => {
              console.log("here is the parsed ", parsed);
              setProducts([parsed, ...products]);
            })
            .catch((err) => console.log(err));
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchCart();
  }, []);
  return <div>Cart</div>;
};
