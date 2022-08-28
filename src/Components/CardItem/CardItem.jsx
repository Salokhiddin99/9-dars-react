import React from "react";
import { Link } from "react-router-dom";
import "./CardItem.scss";
function CardItem({ ByName, item, dark, setDark }) {
  return (
    <>
      <li className={`card card__item ${dark ? "card__item-dark" : ""}`}>
        <div className="card-header">
          <img src={item.flags.png} alt="country flag" />
        </div>
        <div className="card-body">
          <Link
            to={`/${item.name.common}`}
            className={`card__title ${dark ? "card__title-dark" : ""}`}
          >
            {item.name.common}
          </Link>
          <div className="card__info">
            <p
              className={`card-population ${
                dark ? "card-population__dark" : ""
              }`}
            >
              <b>Population:</b>
              {item.population}
            </p>
            <p
              className={`card-population ${
                dark ? "card-population__dark" : ""
              }`}
            >
              <b>Region:</b>
              {item.region}
            </p>
            <p
              className={`card-population ${
                dark ? "card-population__dark" : ""
              }`}
            >
              <b>Capital</b>
              {item.capital?.map((capital) => capital)}
            </p>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
