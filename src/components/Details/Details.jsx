import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const fetchBookDetails = (id) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`, {
      params: {
        key: "AIzaSyAZ30gNEG10QmkEwh9wtelbwXc88Xi6qTU",
      },
    })
}

export default function Details() {
    const [bookDetails, setBookDetails] = useState(null)
    const {id} = useParams()
    const navigate = useNavigate()

  const navigateBack = (e) => {
    navigate(-1)
  }

    useEffect(() => {
      if (id) {
        fetchBookDetails(id)
          .then(res => {
              setBookDetails(res.data)
          })
      }
    }, [])

    return(
        <div className='d-flex flex-column'>
          <div className='d-flex gap-5 p-5 bg-light'>
            <div>
              <button className='btn btn-warning px-5 py-0' onClick={navigateBack}>back</button>
            </div>

            <div>
              <h3 className='fs-3'>{bookDetails?.volumeInfo?.title}</h3>
              <h3 className='fs-6'>{bookDetails?.volumeInfo?.subtitle}</h3>
            </div>
          </div>

          <div className='d-flex mt-5 ms-5 gap-3'>
            <img
              src={bookDetails?.volumeInfo?.imageLinks?.thumbnail}
              alt={bookDetails?.volumeInfo?.title} />

            <div className='d-flex flex-column'>
              <div className='d-flex gap-1'>
                <p>Publish date:</p>
                <p>{bookDetails?.volumeInfo?.publishedDate}</p>
              </div>
              <div className='d-flex gap-1'>
                <p>Publisher:</p>
                <p>{bookDetails?.volumeInfo?.publisher}</p>
              </div>
              <div className='d-flex gap-1'>
                <p>Language:</p>
                <p>{bookDetails?.volumeInfo?.language}</p>
              </div>
              <div className='d-flex gap-1'>
                <p>Page count:</p>
                <p>{bookDetails?.volumeInfo?.pageCount}</p>
              </div>
            </div>
          </div>
        </div>
    )
}