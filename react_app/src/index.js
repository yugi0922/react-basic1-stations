import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import reportWebVitals from "./other/reportWebVitals";
import BulletinBoard from "./BulletinBoard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NewThread } from "./thread/NewThread";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <React.StrictMode>
      <BulletinBoard />
    </React.StrictMode> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BulletinBoard />}></Route>
      </Routes>
      <Routes>
        <Route path="/thread/new" element={<NewThread />}></Route>
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
