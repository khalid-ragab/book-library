import React from "react";
import "./card.scss"
export default function Card(props) {
  return (
    <div className="col-md-4 mt-5">
      <div className="card shadow-lg specialCard">
        {props.img && (
          <img src={props.img} className="card_img" alt="" />
        )}
        <div className="card-body mx-auto">
          <h5 className="card-title text-black-50 my-auto text-center">
            {props.text}
          </h5>
        </div>
          <button type="button" className="btn btn-warning">Show Details</button>
      </div>
    </div>
  );
}
