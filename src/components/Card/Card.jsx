import React from "react";
import { Link } from 'react-router-dom'

export default function zCard({ img, text, className, id }) {

  return (
      <div className="card shadow-lg specialCard">
        {img && (
          <img src={img} className="card_img" alt={text} />
        )}
        <div className="card-body mx-auto">
          <h5 className="card-title text-black-50 my-auto text-center">
            {text}
          </h5>
        </div>
          <Link to={`/${id}`} type="button" className="btn btn-warning mx-3 mb-3">Show Details</Link>
      </div>
  );
}
