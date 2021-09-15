import React from "react";
import './PictureCard.css'

const PictureCard = ({data}) => {
    return(
         data.map((e) => (
            <div className="picture-card">
                <img className="card-img" src= {e.url}  alt={e.description}/>
            </div>
        ))
    )

}

export default PictureCard;