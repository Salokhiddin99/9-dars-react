import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Card from "../../API/GetAPI";
import CardItem from "../CardItem/CardItem";
import dataContext from "../../Context/DataContext";
import { useParams } from "react-router-dom";
function Items({ dark, setDark }) {
  const allData = useContext(dataContext);
  return (
    <>
      <div className="container">
        <ul className="d-flex flex-wrap gap-3 mt-5 gap-md-5 flex-column flex-sm-row justify-content-center align-items-center">
          {allData.map((item, index) => (
            <CardItem item={item} key={index} dark={dark} setDark={setDark} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Items;
