import "./App.css";
import HeroSection from "./Component/HeroSection/HeroSection";
import NavBar from "./Component/NavBar/NavBar";
import Card from "./Component/Card/Card";
import { useEffect, useState } from "react";
import {
  fetchTopAlbums,
  fetchSongs,
  fetchNewAlbums,
} from "./Component/api/api";
import Section from "./Component/Section/Section";

function App() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [filteredDataValues, setFilteredDataValues] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(0);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const generateSongsData = (value) => {
    let key;
    if (value === 0) {
      filteredData(songsData);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    }
    const res = songsData.filter((item) => item.genre.key === key);
    filteredData(res);
  };

  useEffect(() => {
    generateSongsData(value);
  }, [value]);

  const generateData = async () => {
    try {
      const res = await fetchTopAlbums();
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };
  const generateDataNew = async () => {
    try {
      const res = await fetchNewAlbums();
      setNewData(res);
    } catch (err) {
      console.log(err);
    }
  };

  const generateAllSongsData = async () => {
    try {
      const res = await fetchSongs();
      setSongsData(res);
      setFilteredDataValues(res);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredData = (val) => {
    setFilteredDataValues(val);
  };

  useEffect(() => {
    generateData();
    generateDataNew();
    generateAllSongsData();
  }, []);

  return (
    <>
      <NavBar data={data} />
      <HeroSection />
      {/*data.map((item) => {
        return <Card key={item.id} data={item} type="album" />;
      })*/}

      <Card data={data} type="type" />
      <div className="secwrapper">
        <Section
          data={data}
          type="album"
          title="Top Albums"
          filteredDataValues={data}
        />
        <Section
          data={newData}
          type="album"
          title="New Albums"
          filteredDataValues={data}
        />
        <Section
          data={songsData}
          type="song"
          title="songs"
          filteredData={filteredData}
          filteredDataValues={filteredDataValues}
        />
      </div>
    </>
  );
}

export default App;
