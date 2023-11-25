import React from "react";
import Card from "../Card/Card";
import './catalouge.scss'
const Catalouge = ({ books }) => {

  return (
      <div className="grid mt-5">
        {books.map((book) => (
            <Card
              key={book.id}
              id={book.id}
              img={book.volumeInfo?.imageLinks?.thumbnail}
              text={book.volumeInfo?.title}
            />
        ))}
      </div>
  );
};

export default Catalouge;
