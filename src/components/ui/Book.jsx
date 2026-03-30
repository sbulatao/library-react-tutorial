import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Book({ book }) {
    const rating = 4;

    // <FontAwesomeIcon icon="star" />
    // <FontAwesomeIcon icon="star" />
    // <FontAwesomeIcon icon="star" />
    // <FontAwesomeIcon icon="star" />

  return (
     <div className="book">
        <Link to="/books/1">
            <figure className="book__img--wrapper">
                <img src={book.url}
                alt="" 
                className="book__img" 
                />
            </figure>
        </Link>
        <div className="book__title">
            <Link to="/books/1" className='book__title--link'>
                {book.title}
            </Link>
        </div>
        <div className="book__ratings">
            {/* RATING */}
            <Rating rating={book.rating}/>
        </div>

        <div className="book__price">
            {book.salePrice ? (
                <>
                    <span className="book__price--normal">${book.originalPrice.toFixed(2)}</span>
                    ${book.salePrice.toFixed(2)}
                </>
            ) :(
                <>
                ${book.originalPrice.toFixed(2)}
                </>
            )}
        </div>
    </div>
  )
}
