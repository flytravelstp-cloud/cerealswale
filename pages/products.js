import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://cerealswale-backend.onrender.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{padding:20}}>
      <h1>🌾 Our Products</h1>

      {products.map((p, i) => (
        <div key={i} style={{border:'1px solid #ccc', margin:10, padding:10}}>
          <h3>{p.name}</h3>
          <p>Price: ₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}
