import React from 'react';
import Book from './Book';
import "./booklist.css";

import {data} from "./books";

const Booklist = () => {
    return (
        <section className="booklist">
            {data.map((book)=>{
                return (
                    <Book key={book.id} {...book}/>
                );
            })}
        </section>
    );
}

export default Booklist
