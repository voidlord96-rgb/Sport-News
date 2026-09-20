import { useState } from "react";
import "./newsDashboard.css";

import oldHorse from "../img/old-hourse.png";
import savila from "../img/savila.png";
import garcia from "../img/garcia.png";

const newsItems = [
  {
    image: oldHorse,
    alt: "Horse racing competition",
    author: "Race98",
    date: "03 June 2023",
    title: "6-Year-Old Horse Dies at Belmont Park After Race Injury",
    excerpt:
      "NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week's",
  },
  {
    image: savila,
    alt: "Savilia Blunk on a bicycle",
    author: "Jony.Ls",
    date: "03 June 2023",
    title: "Savilia Blunk Embraces Longer Season With World Cup",
    excerpt:
      "Last year, Savilia Blunk took a more conservative approach to her first season as an Elite Class athlete, skipping some",
  },
  {
    image: garcia,
    alt: "Ryan Garcia in a boxing ring",
    author: "King.F",
    date: "03 June 2023",
    title: "Ryan Garcia is fighting again, this time on social media",
    excerpt:
      "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
  },
];

const promo = {
  tag: "Cycling",
  author: "Debits",
  date: "03 June 2023",
  title: "DISCOVER THE MEMBER BENEFITS OF USA CYCLING!",
};

function NewsMeta({ author, date, className = "news-card__meta" }) {
  return (
    <p className={className}>
      <span>{author}</span>
      <span aria-hidden="true">—</span>
      <time dateTime="2023-06-03">{date}</time>
    </p>
  );
}

function NewsDashboard() {
  const [activeNews, setActiveNews] = useState(null);

  const handleNewsClick = (title) => {
    setActiveNews(activeNews === title ? null : title);
  };

  return (
    <section className="news-dashboard">
      <div className="container">
        <section className="news-dashboard__trending">
          <h2 className="news-dashboard__title">Trending News</h2>

          <ul className="news-list">
            {newsItems.map(
              ({ image, alt, author, date, title, excerpt }) => (
                <li
                  className={`news-card ${
                    activeNews === title ? "active" : ""
                  }`}
                  key={title}
                  onClick={() => handleNewsClick(title)}
                >
                  <article className="news-card__article">
                    <div className="news-card__image-wrapper">
                      <img
                        src={image}
                        alt={alt}
                        className="news-card__image"
                      />
                    </div>

                    <div className="news-card__content">
                      <NewsMeta author={author} date={date} />

                      <h3 className="news-card__title">{title}</h3>

                      <p className="news-card__excerpt">{excerpt}</p>
                    </div>
                  </article>
                </li>
              ),
            )}
          </ul>
        </section>

        <article className="news-dashboard__promo">
          <div className="news-dashboard__promo-overlay">
            <p className="news-dashboard__promo-tag">{promo.tag}</p>

            <div className="news-dashboard__promo-content">
              <NewsMeta
                author={promo.author}
                date={promo.date}
                className="news-dashboard__promo-meta"
              />

              <h2 className="news-dashboard__promo-title">
                {promo.title}
              </h2>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default NewsDashboard;