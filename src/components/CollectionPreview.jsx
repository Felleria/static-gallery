import React from 'react';

const CollectionPreview = () => {
  return (
    <section className="bg-white text-black py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-4">
            Explore Our Exclusive Collection
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Handpicked pieces to elevate your style. Shop now for timeless fashion.
          </p>
        </div>
        



        {}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {}
          <div className="group relative">
            <img
              src="/images/TOPS.png"
              alt="Collection Item 1"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
              <button className="bg-black text-white py-2 px-6 rounded-lg font-medium hover:bg-gray-800">
                View Details
              </button>
            </div>
          </div>



          {}
          <div className="group relative">
            <img
              src="/images/STATIC.png"
              alt="Collection Item 2"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
              <button className="bg-black text-white py-2 px-6 rounded-lg font-medium hover:bg-gray-800">
                View Details
              </button>
            </div>
          </div>



          {}
          <div className="group relative">
            <img
              src="/images/CAP.png"
              alt="Collection Item 3"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
              <button className="bg-black text-white py-2 px-6 rounded-lg font-medium hover:bg-gray-800">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionPreview;
