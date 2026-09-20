import { useState } from "react";
import "./header.css";
import headerPlayer from "../img/header-player.png";
import headerBall from "../img/ball-header.png";

const newsItems = [
  {
    category: "Race98",
    date: "03 June 2023",
    title: "Ethiopian runners took the top four spots.",
  },
  {
    category: "INDYCAR",
    date: "03 June 2023",
    title: "IndyCar Detroit: Dixon quickest in second practice",
  },
];

function Header() {
  const [activeNews, setActiveNews] = useState(null);

  return (
    <header className="header">
      <div className="container">
        <img
          className="header__player"
          src={headerPlayer}
          alt="Basketball player"
        />

        <img
          className="header__ball"
          src={headerBall}
          alt="Basketball"
        />

        <div className="header__content">
          <h1 className="header__title">
            Top scorer to the final match
          </h1>

          <div className="header__description">
            <p className="header__text">
              The EuroLeague Finals Top Scorer is the individual award for the
              player that gained the highest points in the EuroLeague Finals
            </p>

            <button className="header__button">
              continue reading
            </button>
          </div>
        </div>

        <aside className="header__news">
          <button className="header__news-button">
            Today
          </button>

          <ul className="header__news-list">
            {newsItems.map(({ category, date, title }) => (
              <li
                key={`${category}-${title}`}
                className={`header__news-item ${
                  activeNews === title ? "active" : ""
                }`}
                onClick={() =>
                  setActiveNews(activeNews === title ? null : title)
                }
              >
                <p className="header__news-meta">
                  {category} - {date}
                </p>

                <h3 className="header__news-title">
                  {title}
                </h3>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </header>
  );
}

export default Header;