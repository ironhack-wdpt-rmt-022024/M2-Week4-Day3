import { useEffect, useState, useSyncExternalStore } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { DetailPage } from "./components/DetailPage";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { AddForm } from "./components/AddForm";
import { UpdateForm } from "./components/UpdateForm";
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        const newProducts = res.data.products.map((element) => {
          element._id = uuidv4();
          return element;
        });
        console.log(newProducts);
        setProducts(newProducts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h1>Connecting it all CRUD</h1>
      <Link to="/create-product">Create a Product</Link>
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/something/:id" element={<DetailPage />} />
        <Route path="/create-product" element={<AddForm />} />
        <Route path="/update-product/:productId" element={<UpdateForm />} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
