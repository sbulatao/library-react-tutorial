import React, { useState } from 'react'
import { books } from '../data' 
import Book from '../components/ui/Book'

const Books = ({ books: initialBooks}) => {
    const [books, setBooks] = useState(initialBooks);

    function filterBooks(filter){
        console.log(filter)
        if(filter === 'LOW_TO_HIGH'){
            // take a.salePrice, if a.salePrice doesnt exist, use the a.originalPrice - take b.salePrice, if b.salePrice doesnt exist, use the b.originalPrice
            // books.sort((a,b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice))
            //.slice -> take a clone
            setBooks(books.slice().sort((a,b) => 
                (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)))
        }
        if(filter === 'HIGH_TO_LOW'){
            // take a.salePrice, if a.salePrice doesnt exist, use the a.originalPrice - take b.salePrice, if b.salePrice doesnt exist, use the b.originalPrice
            // books.sort((b,a) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice))
            //.slice -> a clone
            setBooks(books.slice().sort((b,a) => 
                (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)))
        }
        if(filter === 'RATING'){
            // take a.rating, if a.rating doesnt exist, use the a.rating - take b.rating, if b.rating doesnt exist, use the b.rating
            // books.sort((b,a) => (a.rating || a.rating) - (b.rating || b.rating))
            //.slice -> a clone
            setBooks(books.slice().sort((b,a) =>
                 (a.rating || a.rating) - (b.rating || b.rating)))
        }
        
    }

  return (
    <div id="books__body">
        <main id="books__main">
            <section>
                <div className="books__container">
                    <div className="row">
                        <div className="books__header">
                            <h2 className="section__title books__header--title">
                                All Books
                            </h2>
                            <select name="" id="filter" defaultValue="DEFAULT" onChange={(event) => filterBooks(event.target.value)}>
                                <option value="DEFAULT" disabled>Sort</option>
                                <option value="LOW_TO_HIGH">Price, Low to High </option>
                                <option value="HIGH_TO_LOW">Price, High to Low</option>
                                <option value="RATING">Rating</option>
                            </select>
                        </div>

                        <div className="books">
                            {books.map((book) => (
                                <Book book={book} key={book.id}/>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
      
    </div>
  );
}

export default Books;
