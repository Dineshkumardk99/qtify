import React from "react";
import "./Section.css";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../Tabs/Tabs";
import Card from "../Card/Card";
import { Box, CircularProgress } from "@mui/material";

const Section = ({
  title,
  data,
  type,
  filteredData = null,
  filteredDataValues = [],
  toggle = false,
  handleToggle = null,
}) => {
  return (
    <div>
      <div className="sectionheader">
        <h3>{title}</h3>
        <h4 className="toggleText" onClick={handleToggle}>
          {!toggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {!data.length ? (
        <CircularProgress />
      ) : (
        <div className="sectioncardwrapper">
          {!toggle ? (
            <div className="sectionwrapper">
              {data.map((item) => (
                <Card key={item.id} data={item} type="album" />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              component={(ele) => <Card data={ele} type="album" />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
