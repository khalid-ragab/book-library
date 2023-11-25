import React, { useEffect, useState } from "react";
import { useDebounce } from 'use-debounce';
import { useNavigate } from 'react-router-dom'

export default function Search({ searchText }){
    const [value, setValue] = useState(searchText);
    const [debouncedValue] = useDebounce(value, 1000);
    const navigate = useNavigate()

    useEffect(() => {
        if (debouncedValue) {
            return navigate(`/home?q=${debouncedValue}`)
        }
        return navigate('/home')
    }, [debouncedValue]);

    return (
        <div>
            <form className="d-flex justify-content-center">
                <input
                    className="form-control w-25 mt-5"
                    type="search"
                    placeholder="Search for book volume"
                    aria-label="search"
                    onKeyDown={e => {
                        return e.key === 'Enter' && e.preventDefault()}
                }
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
            </form>
        </div>
    );
}
