import React, { useEffect, useState } from "react";
const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getAllData();
  }, []);

  async function getAllData() {
    const apiData = await fetch(URL);
    const res = await apiData.json();
    console.log(res);
    setData(res);
  }

  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="items">
          <h1>{item.title}</h1>
        </div>
      ))}
    </>
  );
};

export default Home;
