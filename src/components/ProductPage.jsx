import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams(); // Get product ID from the route
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("Rendering ProductPage for ID:", id); // Debugging log

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5555/products/${id}`);
        
        if (!response.ok) {
          throw new Error(`Product not found (ID: ${id})`);
        }

        const data = await response.json();
        setProduct(data);
        setError(null); // Reset error state if successful
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(err.message);
      } finally {
        setLoading(false); // Stop loading after request
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-gray-600 text-center">Loading product details...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  if (!product) return <p className="text-gray-500 text-center">Product details unavailable.</p>;

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
      {/* Product Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={product.image_url || "/default-product.jpg"} // Fallback image
          alt={product.name || "Product image"}
          className="rounded-2xl w-full h-auto object-cover shadow-lg"
        />
      </div>

      {/* Product Info Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-lg text-gray-600 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold mb-6">${product.price}</p>

        {/* Add to Cart Button */}
        <button
          className="w-full bg-black text-white py-3 rounded-2xl hover:bg-gray-800 transition"
          aria-label={`Add ${product.name} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
