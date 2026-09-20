import { useState } from "react";
import "./category.css";

const categories = [
  {
    title: "Football",
    modifier: "football",
  },
  {
    title: "Basketball",
    modifier: "basketball",
  },
  {
    title: "Car Sport",
    modifier: "car-sport",
  },
  {
    title: "Table Tennis",
    modifier: "table-tennis",
  },
];

const imageBlocks = [
  {
    modifier: "empty-1",
  },
  {
    modifier: "empty-2",
  },
  {
    modifier: "empty-3",
  },
  {
    modifier: "empty-4",
  },
];

function Category() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section className="category">
      <div className="container">
        <h2 className="category__title">Category</h2>

        <div className="category__grid">
          {categories.map(({ title, modifier }) => (
            <h3
              key={modifier}
              className={`category__item category__item--${modifier} ${
                activeCategory === modifier ? "active" : ""
              }`}
              onClick={() => setActiveCategory(modifier)}
            >
              <span>{title}</span>
            </h3>
          ))}

          {imageBlocks.map(({ modifier }) => (
            <div
              key={modifier}
              className={`category__item category__item--${modifier}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;
