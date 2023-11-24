import React,{useState} from "react";
import axios from "axios";
import Search from "./search";
import Catalouge from "./catalouge";
export default function Home() {
    const [books, setBooks] = useState([]);
  
    const handleSearch = (searchQuery) => {
      axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: searchQuery,
          maxResults: 20,
          startIndex: 1,
          key: "AIzaSyAZ30gNEG10QmkEwh9wtelbwXc88Xi6qTU",
        },
      })
      .then(response => {
        console.log(response); 
        setBooks(response.data.items || []);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    };
    return(
        <div>
         <Search onSearch={handleSearch} />
      {books.length ? (
        <Catalouge books={books} />
      ) : (
        <p className="d-flex justify-content-center my-5 fs-3 text-warning-emphasis">Search To Show Books!</p>
      )}
        </div>
    )
}