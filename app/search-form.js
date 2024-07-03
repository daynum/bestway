'use client'
import { useState } from 'react';
import axios from 'axios';
import SearchBar from './search-bar'
import ListData from './list-data'

function getBookList(searchQuery, setBookList) {
    // localStorage.clear()
    // // Use client browser to make anonymous request.
    // if (localStorage.getItem('books')) {
    //     console.log("using local storage for books");
    //     return JSON.parse(localStorage.getItem('books'));
    // }
    let config = { 'params': { 'q': searchQuery } };
    axios.get('https://www.googleapis.com/books/v1/volumes', config)
        .then((response) => {
            localStorage.setItem('books', JSON.stringify(response.data.items));
            setBookList(response.data.items);
        })

}

function getVideoList(searchQuery, setVideoList) {
    // Use backend to make request
    // localStorage.clear()
    // if (localStorage.getItem('videos')) {
    //     console.log("using local storage for videos");
    //     return JSON.parse(localStorage.getItem('videos'));
    // }
    let config = { 'params': { 'q': searchQuery } };
    axios.get('/api/youtubeSearch', config)
        .then((response) => {
            localStorage.setItem('videos', JSON.stringify(response.data));
            setVideoList(response.data);
        })
}

export default function SearchForm() {
    let [searchQuery, setSearchQuery] = useState("");
    let [bookList, setBookList] = useState([]);
    let [videoList, setVideoList] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        let q = document.getElementById("queryInput").value;
        setSearchQuery(q);

        getVideoList(q, setVideoList);
        getBookList(q, setBookList);
    }
    return (
        <>
            <SearchBar searchQuery={searchQuery} onSubmit={handleSubmit} />
            <div className="flex overflow-x-scroll gap-x-4 mt-8">
                <ListData resourceType="Book" resultList={bookList} />
                <ListData resourceType="Video" resultList={videoList} />
            </div>
        </>
    );
}