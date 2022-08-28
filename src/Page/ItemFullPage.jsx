import React, { useEffect, useState } from "react";
import "./ItemFullPage.scss";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../API/GetAPI";
import ArrowLight from "../assets/images/arrow-light.svg";
import ArrowDark from "../assets/images/arrow-dark.svg";
import Loader from "../Components/Loader/Loader";
function ItemFullPage({ dark, setDark }) {
  const [nameData, setNameData] = useState([]);
  const [loader, setLoader] = useState(false);
  const { common } = useParams();
  const ByName = async () => {
    setLoader(false);
    const res = await axios.get(Card.ByName(common));
    setNameData(res.data);
    setLoader(true);
  };
  useEffect(() => {
    ByName();
  }, []);
  let back = useNavigate();
  let arr = [];
  let name = [];
  let currencies = nameData.map((item) => {
    for (let key in item.currencies) {
      arr.push(item.currencies[key].name);
    }
    return arr;
  });
  let nativeName = nameData.map((item) => {
    for (let key in item.name.nativeName) {
      name.push(item.name.nativeName[key].common);
    }
    return name;
  });
  return (
    <div className={dark ? "bg-dark" : "bg-white"}>
      {loader ? (
        <aside className="page">
          <div className="container">
            <div
              className="page__header  d-flex align-items-center"
              onClick={() => back(-1)}
            >
              <img src={dark ? ArrowDark : ArrowLight} alt="arrow left" />
              <span
                className={`page__header-title ${dark ? "text-white" : ""}`}
              >
                Back
              </span>
            </div>
            <div className="page__body">
              <div className="page__left">
                <img src={nameData[0].flags.png} alt="" />
              </div>
              <div className="page__right">
                <h3 className={`page-title ${dark ? "page-title__dark" : ""}`}>
                  {nameData[0].name?.common}
                </h3>
                <div className="page__right-inner d-flex w-100">
                  <div className="left-info">
                    <p
                      className={`left-info__text ${
                        dark ? "left-info__text-dark" : ""
                      }`}
                    >
                      <b>Native Name :</b>
                      {nativeName[0].map((item, index) => {
                        return (
                          <span className="nativeName" key={index}>
                            {item},
                          </span>
                        );
                      })}
                    </p>
                    <p
                      className={`left-info__text ${
                        dark ? "left-info__text-dark" : ""
                      }`}
                    >
                      <b>Population:</b>
                      {nameData[0].population}
                    </p>
                    <p
                      className={`left-info__text ${
                        dark ? "left-info__text-dark" : ""
                      }`}
                    >
                      <b>Region :</b>
                      {nameData[0].region}
                    </p>
                    <p
                      className={`left-info__text ${
                        dark ? "left-info__text-dark" : ""
                      }`}
                    >
                      <b>Sub Region :</b>
                      {nameData[0].subregion}
                    </p>
                    <p
                      className={`left-info__text ${
                        dark ? "left-info__text-dark" : ""
                      }`}
                    >
                      <b>Capital :</b>
                      {nameData[0]?.capital.map((item, index) => {
                        return (
                          <>
                            <span key={index}>{item}</span>
                          </>
                        );
                      })}
                    </p>
                  </div>
                  <div className="right-info">
                    <p
                      className={`left-info__text ${
                        dark ? "left-info__text-dark" : ""
                      }`}
                    >
                      <b>Top Level Domain :</b>
                      {nameData[0]?.tld.map((item, index) => {
                        return (
                          <>
                            <span key={index}>{item}</span>
                          </>
                        );
                      })}
                    </p>
                    <p
                      className={`left-info__text ${
                        dark ? "left-info__text-dark" : ""
                      }`}
                    >
                      <b>Currencies :</b>
                      {currencies[0].map((item, index) => {
                        return (
                          <>
                            <span className="nativeName" key={index}>
                              {item},
                            </span>
                          </>
                        );
                      })}
                    </p>
                    <p
                      className={`left-info__text ${
                        dark ? "left-info__text-dark" : ""
                      }`}
                    >
                      <b>Languages :</b>
                      {nameData.map((item, index) => {
                        return (
                          <>
                            <span key={index}>
                              {Object.values(item.languages)}
                            </span>
                          </>
                        );
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default ItemFullPage;
