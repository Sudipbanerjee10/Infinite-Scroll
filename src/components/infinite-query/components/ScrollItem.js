import moment from "moment";
import React from "react";
import "./ScrollItem.scss";
import { config } from "../../../config";

const ScrollItem = ({ data }) => {
  const { backdrop_path, poster_path, title, release_date } = data;
  const imageUrl = config.tmdb_image_url;
  const formatedDate = moment(release_date).format("MMMM Do YYYY");

  return (
    <div className="scroll_item">
      <img
        src={`${imageUrl}${backdrop_path ? backdrop_path : poster_path}`}
        alt={title}
        className="image_path"
      />
      <h5>{title}</h5>
      <p>{formatedDate ?? ""}</p>
    </div>
  );
};

export default ScrollItem;
