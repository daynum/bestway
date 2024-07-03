'use client'

import axios from 'axios';
import { useState } from 'react';

export default function VideoList({ videoList }) {
    if (!videoList) {
        return (
            <li>Enter Search topic</li>
        );
    } else {
        return (
            videoList.map((video) => {
                return (
                    <li key={video.id.videoId} className="py-3 sm:py-4">
                        <div className="flex items-center">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white underline">
                                    <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank">{video.snippet.title}</a>
                                </p>
                            </div>
                            {/* <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $320
                            </div> */}
                        </div>
                    </li>
                );
            })
        );
    }

}