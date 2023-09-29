import React from "react";
import "./Card.css";
import { Tooltip } from "@mui/material";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title } = data;
        return (
          <Tooltip>
            <div className="full-card">
              <div className="card">
                <img src={image} alt="album" />
                <div className="cardspace">
                  <div className="chip">{`${follows} Follows`}</div>
                </div>
              </div>
              <div className="titlecard">
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }

      default:
        return <></>;
    }
  };
  return getCard(type);
};

export default Card;
