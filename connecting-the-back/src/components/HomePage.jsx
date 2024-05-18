import { useEffect } from "react";
import { Link } from "react-router-dom";

export const HomePage = ({ products }) => {
  return (
    <div>
      {products.map((oneProduct) => {
        return (
          <Link key={oneProduct.id} to={`/something/${oneProduct.id}`}>
            <div>
              <img src={oneProduct.thumbnail} alt={oneProduct.title} />
              <h3>Title: {oneProduct.title}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
