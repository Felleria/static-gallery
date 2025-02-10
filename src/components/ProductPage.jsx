import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams(); // Get product ID from the route
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5555/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) return <p>Loading product details...</p>;

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
      {/* Product Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={product.image_url}
          alt={product.name}
          className="rounded-2xl w-full h-auto object-cover shadow-lg"
        />
      </div>

      {/* Product Info Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-lg text-gray-600 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold mb-6">${product.price}</p>

        {/* Add to Cart Button */}
        <button className="w-full bg-black text-white py-3 rounded-2xl hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
