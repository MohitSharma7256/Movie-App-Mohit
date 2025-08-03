import axios from "../utils/Axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from '../../public/noimage.jpg'

function TopNav() {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const getSearchResults = async () => {
        if (!query.trim()) return;
        try {
            const { data } = await axios.get(`/search/multi?query=${query}`);
            setSearchResults(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            getSearchResults();
        }, 300);

        return () => clearTimeout(delayDebounce);
    }, [query]);

    return (
        <div className="w-full h-[10vh] bg-zinc-900 px-4 flex items-center justify-center  shadow-md sticky top-0 z-50">
            {/* Search Bar */}
            <div className="flex items-center bg-zinc-800 w-full max-w-3xl h-10 rounded-full px-4 gap-3 transition-all duration-200 border border-zinc-700 focus-within:border-blue-500  ">
                <i className="ri-search-line text-xl text-zinc-400" />
                <input
                    type="text"
                    placeholder="Search for movies, shows, or people..."
                    className="bg-transparent flex-1 text-white placeholder-zinc-500 outline-none"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                {query.length > 0 && (
                    <i
                        className="ri-close-line text-xl text-zinc-400 hover:text-red-400 cursor-pointer transition-colors"
                        onClick={() => {
                            setQuery("");
                            setSearchResults([]);
                        }}
                    />
                )}
            </div>

            {/* Dropdown Results */}
            {query.trim() && searchResults.length > 0 && (
                <div className="absolute top-full left-4 w-full max-w-3xl mt-2 bg-zinc-800 rounded-xl overflow-hidden shadow-xl border border-zinc-700 max-h-[50vh] overflow-y-auto animate-fadeIn">
                    {searchResults.map((item, idx) => (
                        <Link
                            key={idx}
                            to={`/${item.media_type}/details/${item.id}`}
                            className="flex items-center gap-4 p-3 border-b border-zinc-700 hover:bg-zinc-700 transition-all duration-150"
                            onClick={() => {
                                setQuery("");
                                setSearchResults([]);
                            }}
                        >
                            <img
                                src={
                                    item.backdrop_path || item.profile_path || item.poster_path
                                        ? `https://image.tmdb.org/t/p/w200/${item.backdrop_path || item.profile_path || item.poster_path}`
                                        : "../../public/noimage.jpg"
                                }
                                alt="thumbnail"
                                className="h-16 w-16 rounded-md object-cover bg-zinc-600"
                            />
                            <div className="text-white text-sm font-semibold">
                                {item.original_title || item.title || item.name}
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default TopNav;
