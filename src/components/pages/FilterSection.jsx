import React, { useState } from "react";

const FilterSection = ({ handleCategory, handlePrice, handleRating }) => {
  const [price, setPrice] = useState(100);
  const [selectedCategories, setSelectedCategories] = useState(new Set());

  const handleCheckChange = (e) => {
    const value = e.target.value;
    const updatedCategories = new Set(selectedCategories);

    if (e.target.checked) {
      updatedCategories.add(value);
    } else {
      updatedCategories.delete(value);
    }

    setSelectedCategories(updatedCategories);
    handleCategory(Array.from(updatedCategories)); // Convert Set back to array before passing to parent
  };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPrice(newPrice);
    handlePrice(newPrice);
  };

  const handleRatingChange = (e) => {
    handleRating(e.target.value);
  };

  return (
    <section className="lg:w-1/6 w-full bg-gray-100 p-4 rounded-md shadow-md">
      <div>
        <h2 className="text-xl font-bold mb-4">Filter</h2>
        <h3 className="font-semibold mb-2">Categories</h3>
        <ul className="space-y-2">
          {[
            "Indoor Plants",
            "Outdoor Plants",
            "Low Maintenance",
            "Air Purifying",
            "Bedroom",
            "Office Plants",
            "Home Decor",
            "Positive Energy",
            "Bonsai",
            "Easy Care Plants",
            "Living Room",
            "Patio",
          ].map((category, index) => (
            <li key={index}>
              <input
                type="checkbox"
                id={category.toLowerCase()}
                name={category.toLowerCase()}
                value={category.toLowerCase()}
                className="mr-2"
                onChange={handleCheckChange}
                checked={selectedCategories.has(category.toLowerCase())}
              />
              <label htmlFor={category.toLowerCase()}>{category}</label>
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-4" />
      <div>
        <h3 className="font-semibold mb-2">Price Range</h3>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min="0"
            max="5000"
            value={price}
            onChange={handlePriceChange}
            className="w-full"
          />
          <p>₹{price}</p>
        </div>
      </div>
      <hr className="my-4" />
      <div>
        <h3 className="font-semibold mb-2">Rating</h3>
        <select className="w-full p-2 border rounded-md" onChange={handleRatingChange}>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars & Up</option>
          <option value="3">3 Stars & Up</option>
          <option value="2">2 Stars & Up</option>
          <option value="1">1 Star & Up</option>
        </select>
      </div>
    </section>
  );
};

export default FilterSection;
