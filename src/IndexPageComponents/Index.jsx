import React from "react";
import Heading from "./Heading";
import SearchBar from "./SearchBar";
import Flags from "./Flags";
import { useState, useEffect } from "react";
import "./Index.css";

function Index() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
        setLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container-fluid outer-body">
      <Heading />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loaded ? (
        <Flags
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          data={data}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Index;
