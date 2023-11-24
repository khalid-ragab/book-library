import React from "react";
import Card from "./card";

const Catalouge = ({ books }) => {
  const filteredBooks = books.filter((book) => book.volumeInfo.imageLinks?.thumbnail);
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 mx-auto">
        {filteredBooks.map((book, index) => (
          <div key={index} className="col">
            <Card
              img={book.volumeInfo.imageLinks.thumbnail}
              text={book.volumeInfo.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalouge;
