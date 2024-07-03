'use client'

import SearchBar from "./search-bar"
import ResultListCard from "./result-list-card"
import { useState } from 'react';

function Header({ title }) {
    return <h1 className="text-center self-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
    let [query, setQuery] = useState("");
    function handleSubmit(newQuery) {
        setQuery(newQuery);
    }
    return (
        <div>
            <Header title="BestWay" />
            <SearchBar onSubmit={handleSubmit} />
            <div className="flex overflow-x-scroll gap-x-4 mt-8">
                <ResultListCard resourceType="Book" query={query} />
                <ResultListCard resourceType="Video" query={query} />
            </div>
        </div>
    );
}