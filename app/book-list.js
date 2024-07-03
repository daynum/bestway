'use client'

import axios from 'axios';
import { useState } from 'react';

function getBookList(query, setBookList) {
    // localStorage.clear()
    // // Use client browser to make anonymous request.
    // if (localStorage.getItem('books')) {
    //     console.log("using local storage for books");
    //     return JSON.parse(localStorage.getItem('books'));
    // }
    let config = { 'params': { 'q': query } };
    axios.get('https://www.googleapis.com/books/v1/volumes', config)
        .then((response) => {
            localStorage.setItem('books', JSON.stringify(response.data.items));
            setBookList(response.data.items);
        })

}

export default function BookList({ query }) {
    let [bookList, setBookList] = useState([]);
    if (!query) {
        return (
            <li>Enter Search topic</li>
        );
    } else {
        if (bookList === undefined || bookList.length === 0) {
            getBookList(query, setBookList);
        }
        return (
            bookList.map((book) => {
                return (
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    {book.volumeInfo.title}
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $320
                            </div>
                        </div>
                    </li>
                );
            })
        );
    }
}