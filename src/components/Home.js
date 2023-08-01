import React, { useEffect, useState } from "react";
import { URL } from "../utils/constant";
import Header from "./Header";

import Card from "../components/Card";

const Home = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getAllData();
  }, []);

  useEffect(() => {
    if (data && searchQuery.trim() !== "") {
      const filtered = data.filter((item) =>
        item.original_title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [data, searchQuery]);

  async function getAllData() {
    const apiData = await fetch(URL);
    const res = await apiData.json();
    console.log(res.results);
    setData(res.results);
    setFilteredData(res.results);
  }

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="cards-container">
        {filteredData?.map((item) => (
          <Card {...item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
