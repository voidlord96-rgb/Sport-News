import "./news-and-rancing.css";

import arsenalLogo from "../img/arsenal-logo-footylogos.svg";
import chelseaLogo from "../img/chelsea-logo-footylogos.svg";
import liverpoolLogo from "../img/liverpool-fc-logo-footylogos.svg";
import manchesterCityLogo from "../img/manchester-city-logo-footylogos.svg";
import manchesterUnitedLogo from "../img/manchester-united-logo-footylogos.svg";
import tottenhamLogo from "../img/tottenham-hotspur-logo-footylogos.svg";

import battle from "../img/battle.png";
import baku from "../img/baku.png";
import open from "../img/open.png";
import ireland from "../img/ireland.png";

const newsItems = [
  {
    image: baku,
    alt: "Baku 2023 Taekwondo Championships",
    meta: "#Pollar. 87 - 12 July 2023",
    title: "Baku 2023 World Taekwondo Championships",
  },
  {
    image: open,
    alt: "Open Championship Royal Liverpool Golf",
    meta: "#Goft. Toni - 20 July 2023",
    title: "Open Championship Royal Liverpool Golf",
  },
  {
    image: ireland,
    alt: "Ireland Tour of England Test 2023",
    meta: "#Cricket. Toni - 27 July 2023",
    title: "Ireland Tour of England Test 2023",
  },
];

const clubs = [
  {
    rank: 1,
    name: "Manchester City",
    logo: manchesterCityLogo,
    stats: [38, 29, 6, 3, 99, 26, 73],
  },
  {
    rank: 2,
    name: "Liverpool",
    logo: liverpoolLogo,
    stats: [38, 28, 8, 2, 94, 26, 68],
  },
  {
    rank: 3,
    name: "Chelsea",
    logo: chelseaLogo,
    stats: [38, 21, 11, 6, 76, 33, 43],
  },
  {
    rank: 4,
    name: "Tottenham Hotspur",
    logo: tottenhamLogo,
    stats: [38, 22, 5, 11, 69, 40, 29],
  },
  {
    rank: 5,
    name: "Arsenal",
    logo: arsenalLogo,
    stats: [38, 22, 3, 13, 61, 48, 13],
  },
  {
    rank: 6,
    name: "Manchester United",
    logo: manchesterUnitedLogo,
    stats: [38, 16, 10, 12, 57, 57, 0],
  },
];

const columns = ["GP", "W", "D", "L", "F", "A", "GD"];

function SportsDashboard() {
  const mainNews = {
    ...newsItems[0],
    image: battle,
  };

  return (
    <section className="sports-dashboard">
      <div className="container">
        <section className="sports-dashboard__news">
          <h2 className="sports-dashboard__title">Recent News</h2>

          <div className="sports-dashboard__news-content">
            <article className="sports-dashboard__main-card">
              <div className="sports-dashboard__main-overlay">
                <span className="sports-dashboard__tag">Day 5 Highlights</span>

                <h3 className="sports-dashboard__main-title">
                  {mainNews.title}
                </h3>
              </div>
            </article>

            <aside className="sports-dashboard__sidebar">
              <ul className="sports-dashboard__news-list">
                {newsItems.map(({ image, alt, meta, title }) => (
                  <li className="sports-dashboard__news-item" key={title}>
                    <article className="sports-dashboard__mini-card">
                      <img
                        src={image}
                        alt={alt}
                        className="sports-dashboard__mini-image"
                      />

                      <div className="sports-dashboard__mini-content">
                        <p className="sports-dashboard__mini-meta">{meta}</p>

                        <h3 className="sports-dashboard__mini-title">
                          {title}
                        </h3>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>

              <button type="button" className="sports-dashboard__more-button">
                More →
              </button>
            </aside>
          </div>
        </section>

        <section className="sports-dashboard__ranking">
          <h2 className="sports-dashboard__title">Clubs Ranking</h2>

          <div className="sports-dashboard__table-wrapper">
            <table className="sports-dashboard__table">
              <thead>
                <tr className="sports-dashboard__table-header">
                  <th
                    className="sports-dashboard__table-heading sports-dashboard__table-heading--club"
                    scope="col"
                  >
                    Club
                  </th>

                  {columns.map((column) => (
                    <th
                      className="sports-dashboard__table-heading"
                      scope="col"
                      key={column}
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {clubs.map(({ rank, name, logo, stats }) => (
                  <tr className="sports-dashboard__table-row" key={rank}>
                    <th
                      scope="row"
                      className="sports-dashboard__table-data sports-dashboard__table-data--club"
                    >
                      <div className="sports-dashboard__club">
                        <span className="sports-dashboard__rank">{rank}</span>

                        <img
                          className="sports-dashboard__club-logo"
                          src={logo}
                          alt={`${name} logo`}
                        />

                        <span className="sports-dashboard__club-name">
                          {name}
                        </span>
                      </div>
                    </th>

                    {stats.map((value, index) => (
                      <td
                        className="sports-dashboard__table-data"
                        key={`${rank}-${index}`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </section>
  );
}

export default SportsDashboard;
