import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import "./football.css";

const footballArticle = {
  category: "Football",
  author: "Agence France-Presse",
  date: "04 June 2023",
  title: "Lionel Messi Leaving Ligue 1 Team Paris Saint-Germain, Club Confirms",
  excerpt:
    "The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals",
};

const pages = [1, 2, 3, 4];

function Football() {
  const [activePage, setActivePage] = useState(1);

  const handlePreviousPage = () => {
    setActivePage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const handleNextPage = () => {
    setActivePage((currentPage) =>
      Math.min(currentPage + 1, pages.length),
    );
  };

  const isFirstPage = activePage === 1;
  const isLastPage = activePage === pages.length;

  return (
    <section className="football">
      <div className="container">
        <div className="football__content">
          <p className="football__category">
            {footballArticle.category}
          </p>

          <article className="football__article">
            <p className="football__meta">
              <span>{footballArticle.author}</span>
              <span aria-hidden="true"> - </span>
              <time dateTime="2023-06-04">
                {footballArticle.date}
              </time>
            </p>

            <h2 className="football__title">
              {footballArticle.title}
            </h2>

            <p className="football__excerpt">
              {footballArticle.excerpt}
            </p>
          </article>
        </div>

        <div className="football__controls">
          <button
            type="button"
            className={`arrow-icon ${isFirstPage ? "inactive" : ""}`}
            onClick={handlePreviousPage}
            disabled={isFirstPage}
            aria-label="Previous page"
          >
            <FontAwesomeIcon
              icon={faArrowLeftLong}
              size="lg"
            />
          </button>

          {pages.map((page) => (
            <button
              type="button"
              key={page}
              className={`football__page ${
                activePage === page ? "active" : ""
              }`}
              onClick={() => setActivePage(page)}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            className={`arrow-icon ${isLastPage ? "inactive" : ""}`}
            onClick={handleNextPage}
            disabled={isLastPage}
            aria-label="Next page"
          >
            <FontAwesomeIcon
              icon={faArrowRightLong}
              size="lg"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Football;