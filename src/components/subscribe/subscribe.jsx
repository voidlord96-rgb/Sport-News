import { useState } from "react";

import "./subscribe.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import finalImage from "../img/final.png";
import zavih from "../img/zavih.png";

const pages = [1, 2, 3, 4];

function Newsletter() {
  const [activePage, setActivePage] = useState(1);

  const isFirstPage = activePage === 1;
  const isLastPage = activePage === pages.length;

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__banner">
          <div className="newsletter__content">
            <h2 className="newsletter__title">
              NEWSLETTER
              <br />
              SUBSCRIPTION
            </h2>

            <form className="newsletter__form">
              <input
                className="newsletter__input"
                type="email"
                placeholder="shovon.khan0099@gmail.com"
                aria-label="Email address"
              />

              <button
                type="submit"
                className="newsletter__submit"
                aria-label="Subscribe"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            </form>
          </div>

          <img
            className="newsletter__swirl"
            src={zavih}
            alt=""
            aria-hidden="true"
          />

          <img
            className="newsletter__image"
            src={finalImage}
            alt="American football player"
          />
        </div>

        <div className="newsletter__bottom">
          <nav className="newsletter__socials" aria-label="Social media">
            <a
              href="#"
              className="newsletter__social-link"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            <a
              href="#"
              className="newsletter__social-link"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="#"
              className="newsletter__social-link"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </nav>

          <nav className="newsletter__pagination" aria-label="Newsletter pages">
            <button
              type="button"
              className={`newsletter__pagination-button newsletter__pagination-button--previous ${
                isFirstPage ? "inactive" : ""
              }`}
              aria-label="Previous page"
              disabled={isFirstPage}
              onClick={() =>
                setActivePage((currentPage) => Math.max(currentPage - 1, 1))
              }
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            {pages.map((page) => (
              <button
                type="button"
                className={`newsletter__page ${
                  page === activePage ? "active" : ""
                }`}
                key={page}
                onClick={() => setActivePage(page)}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              className={`newsletter__pagination-button newsletter__pagination-button--next ${
                isLastPage ? "inactive" : ""
              }`}
              aria-label="Next page"
              disabled={isLastPage}
              onClick={() =>
                setActivePage((currentPage) =>
                  Math.min(currentPage + 1, pages.length),
                )
              }
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
