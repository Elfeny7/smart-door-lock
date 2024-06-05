"use client";
import React, { useState } from 'react';
import { TERipple } from 'tw-elements-react';

type SearchComponentProps = {
    onSearch: (term: string) => void;
}

export default function SearchComponent({ onSearch }: SearchComponentProps): JSX.Element {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <div className="md:w-96">
            <div className="relative flex w-full flex-wrap items-stretch">
                <input
                    type="search"
                    className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-slate-300 bg-transparent bg-clip-padding px-3 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon3"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                {/* <TERipple>
                    <button
                        className="relative z-[2] rounded-r border-2 border-blue-500 px-6 py-3 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                        type="button"
                        id="button-addon3">
                        Search
                    </button>
                </TERipple> */}
            </div>
        </div>
    );
}