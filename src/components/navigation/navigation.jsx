import { NavLink } from "react-router-dom";
import "./navigation.css";
import SportNews from "../img/SportNews.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  "Home",
  "Category",
  "Trending News",
  "Recent News",
  "Clubs Ranking",
  "Sports Article",
];

function SportNav() {
  return (
    <nav className="sport-nav">
      <div className="container">
        <a href="/" className="sport-nav__logo">
          <img src={SportNews} alt="Sport News" />
        </a>

        <ul className="sport-nav__list">
          {navLinks.map((link) => (
            <li key={link}>
              <NavLink
                to={`/${link.toLowerCase().replaceAll(" ", "-")}`}
                data-text={link}
                className={({ isActive }) =>
                  isActive ? "sport-nav__link active" : "sport-nav__link"
                }
              >
                <span>{link}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <FontAwesomeIcon icon={faMagnifyingGlass} />

        <input type="text" placeholder="Search" />
      </div>
    </nav>
  );
}

export default SportNav;
