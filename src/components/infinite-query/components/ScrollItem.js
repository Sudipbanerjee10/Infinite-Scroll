import moment from "moment";
import React from "react";
import "./ScrollItem.scss";

const ScrollItem = ({ data }) => {
  const { backdrop_path, poster_path, title, release_date } = data;
  const formatedDate = moment(release_date).format("MMMM Do YYYY");

  const baseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className="scroll_item">
      <img
        src={`${baseUrl}${backdrop_path ? backdrop_path : poster_path}`}
        alt={title}
        className="image_path"
      />
      <h5>{title}</h5>
      <p>{formatedDate ?? ""}</p>
    </div>
  );
};

export default ScrollItem;
