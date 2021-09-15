import React from "react";

const PictureCard = ({ data }) => {
  return data.map((e) => (
    <div key={e.id} className="picture-card">
      <img className="card-img" src={e.url} width="250px" alt={e.description} />
      <p className="card-description"> {e.description}</p>
    </div>
  ));
};

export default PictureCard;
