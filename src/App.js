import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import TopRatedPage from "./components/TopRatedPage";
import UpcomingPage from "./components/UpcomingPage";
import "./styles.css";
import MovieDetails from "./components/MovieDetails";

const Head = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Head />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
