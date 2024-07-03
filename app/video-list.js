'use client'

import axios from 'axios';
import { useState } from 'react';

function getVideoList(query, setVideoList) {
    // Use backend to make request
    // localStorage.clear()
    // if (localStorage.getItem('videos')) {
    //     console.log("using local storage for videos");
    //     return JSON.parse(localStorage.getItem('videos'));
    // }
    let config = { 'params': { 'q': query } };
    return axios.get('/api/youtubeSearch', config)
        .then((response) => {
            localStorage.setItem('videos', JSON.stringify(response.data));
            setVideoList(response.data);
        })
    // return [{ "snippet": { "title": "book1" } }];
}

export default function VideoList({ query }) {
    let [videoList, setVideoList] = useState([]);
    if (!query) {
        return (
            <li>Enter Search topic</li>
        );
    } else {
        if (videoList === undefined || videoList.length === 0) {
            getVideoList(query, setVideoList);
        }
        return (
            videoList.map((video) => {
                return (
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    {video.snippet.title}
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