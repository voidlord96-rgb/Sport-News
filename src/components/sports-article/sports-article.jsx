import "./sports-article.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

import avatar1 from "../img/avatar2.png";
import avatar2 from "../img/avatar1.png";
import avatar3 from "../img/avatar3.png";

import basketballCat from "../img/basketba-cat.png";
import hockeyCat from "../img/hockey-cat1.png";
import badmintonCat from "../img/badminton-cat.png";

const articles = [
  {
    image: basketballCat,
    imageAlt: "Basketball equipment",
    category: "Basketball",
    authorAvatar: avatar1,
    author: "Jake Will.",
    date: "04 June 2023",
    title: "5 Exercises Basketball Players Should Be Using To Develop Strength",
    excerpt:
      "This article was written by Jake Willhoite from Healthlist.com. Jake Willhoite is a former basketball athlete and writes about a massive body mass or ripped muscles.",
  },
  {
    image: hockeyCat,
    imageAlt: "Hockey player on ice",
    category: "Hockey",
    authorAvatar: avatar2,
    author: "Foxi.zacon",
    date: "03 June 2023",
    title:
      "Golden Knights out to fulfill owner's quest to win Stanley Cup in 6th year",
    excerpt:
      "The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday.",
  },
  {
    image: badmintonCat,
    imageAlt: "Badminton rackets and shuttlecocks",
    category: "Badminton",
    authorAvatar: avatar3,
    author: "Bong Lozada",
    date: "01 June 2023",
    title: "‘Outdoor’ Badminton Gets Support From Local Federation",
    excerpt:
      "The Badminton World Federation is developing Air Badminton and the country’s growing body, Philippine Badminton Association.",
  },
];

function SportsArticle() {
  return (
    <section className="sports-article">
      <div className="container">
        <h2 className="sports-article__title">Sports Article</h2>

        <ul className="sports-article__list">
          {articles.map(
            ({
              image,
              imageAlt,
              category,
              authorAvatar,
              author,
              date,
              title,
              excerpt,
            }) => (
              <li className="sports-article__item" key={title}>
                <article className="sports-article__card">
                  <div className="sports-article__image-wrapper">
                    <img
                      className="sports-article__image"
                      src={image}
                      alt={imageAlt}
                    />

                    <span className="sports-article__category">{category}</span>
                  </div>

                  <div className="sports-article__author">
                    <img
                      className="sports-article__avatar"
                      src={authorAvatar}
                      alt=""
                      aria-hidden="true"
                    />

                    <span className="sports-article__author-name">
                      {author}
                    </span>
                  </div>

                  <time className="sports-article__date" dateTime={date}>
                    {date}
                  </time>

                  <h3 className="sports-article__card-title">{title}</h3>

                  <p className="sports-article__excerpt">{excerpt}</p>
                </article>
              </li>
            ),
          )}
        </ul>

        <nav
          className="sports-article__controls"
          aria-label="Sports articles navigation"
        >
          <button
            type="button"
            className="sports-article__control sports-article__control--previous"
            aria-label="Previous articles"
          >
            <FontAwesomeIcon icon={faArrowLeftLong} size="lg" />
          </button>

          <button
            type="button"
            className="sports-article__control sports-article__control--next"
            aria-label="Next articles"
          >
            <FontAwesomeIcon icon={faArrowRightLong} size="lg" />
          </button>
        </nav>
      </div>
    </section>
  );
}

export default SportsArticle;
