import React from "react";
import './PictureCard.css'

const PictureCard = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className="picture-card">
        <img className="card-img" 
        src='https://www.store.africa-business.com/assets/img/no-record-found.gif' 
        alt='No Data Founds' />
      </div>
    );
  }
  return data.map((e) => (
    <div className="picture-card">
      <img className="card-img" src={e.url} alt={e.description} />
    </div>
  ));
};
export default PictureCard;
