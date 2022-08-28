import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Card from "./API/GetAPI";
import Header from "./Components/Header/Header";
import Items from "./Components/Items/Items";
import Loader from "./Components/Loader/Loader";
import modeContext from "./Context/Mode";
import dataContext from "./Context/DataContext";
import ItemFullPage from "./Page/ItemFullPage";
function App() {
  // uuid
  //json server
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [dark, setDark] = useState(false);
  const AllCard = async () => {
    setLoader(false);
    const res = await axios.get(Card.AllCard());
    setData(res.data);
    setLoader(true);
  };
  useEffect(() => {
    AllCard();
  }, []);

  return (
    <>
      {loader ? (
        <>
          <div className={dark ? "bg-dark" : "bg-white"}>
            <Header dark={dark} setDark={setDark} />
            <dataContext.Provider value={data}>
              <Routes>
                <Route path="/" element={<Items dark={dark} />} />
                <Route path="/:common" element={<ItemFullPage dark={dark} />} />
              </Routes>
            </dataContext.Provider>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
