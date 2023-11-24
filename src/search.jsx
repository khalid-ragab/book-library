import React, { useEffect, useState } from "react";
import { useDebounce } from 'use-debounce';

export default function Search(props){
    const [value, setValue] = useState("");
    const [debouncedValue] = useDebounce(value, 1000);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (debouncedValue) {
            props.onSearch(debouncedValue);
        }
    };

    useEffect(() => {
        if (debouncedValue) {
            props.onSearch(debouncedValue);
        }
    }, [debouncedValue, props]);

    return (
        <div>
            <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
                <input
                    className="form-control me-2 w-25 mt-5"
                    type="search"
                    placeholder="search"
                    aria-label="search"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <button className="btn btn-info mt-5" type="submit">Enter</button>
            </form>
        </div>
    );
}
