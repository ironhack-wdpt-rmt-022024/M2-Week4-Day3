import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  useEffect(() => {
    const fetchOneProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const parsed = await response.json();
        console.log("here is the one product", parsed);
        setProduct(parsed);
      } catch (err) {
        console.log("there was an error, fetching one product", err);
      }
    };
    fetchOneProduct();
  }, [productId]);
  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} style={{ height: "300px" }} />
      <h2>Title: {product.title}</h2>
      <h3>Description: {product.description}</h3>
    </div>
  );
}

export default ProductDetailsPage;
