import React from "react";

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-stone-50 py-20 text-center">
      <h1 className="text-5xl font-serif text-stone-800 mb-6">Our Gallery</h1>
      <p className="text-stone-600 mb-12">
        A glimpse of our salon — elegance, luxury, and perfection.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Gallery ${i}`}
            className="rounded-lg shadow-md hover:shadow-xl transition hover:scale-105 duration-500"
          />
        ))}
      </div>

      <button
        onClick={() => window.location.href = "/"}
        className="mt-12 bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition"
      >
        ← Back to Home
      </button>
    </div>
  );
};

export default Gallery;
