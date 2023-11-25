import React, { useEffect, useState } from 'react'
import axios from "axios";
import Search from "../Search/Search";
import Catalouge from "../Catalouge/Catalouge";
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string';

export default function Home() {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate()
    const location = useLocation();
    const { q } = queryString.parse(location.search);
    const [isLoading, setIsLoading] = useState(false)

  const handleSearch = () => {
      setIsLoading(true);
      axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q,
          maxResults: 20,
          startIndex: 1,
          key: "AIzaSyAZ30gNEG10QmkEwh9wtelbwXc88Xi6qTU",
        },
      })
      .then(response => {
        setIsLoading(false);
        navigate(`/home?q=${q}`)
        setBooks(response.data.items || []);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    };

  useEffect(() => {
    if (q) {
     return handleSearch()
    }
    return setBooks([])
  }, [q])


  if (isLoading) {
    return <p className='mt-5 text-center'>Loading search results...</p>
  }

    return(
        <div>
         <Search searchText={q} />
      {books.length ? (
        <Catalouge books={books} />
      ) : (
        <div className="d-flex justify-content-center my-5">
          <p className=" fs-6 text-warning-emphasis">Search result will be shown here...</p>
        </div>
      )}
        </div>
    )
}