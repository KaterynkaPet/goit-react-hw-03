//import SearchBox from './SearchBox.module.css'
import { useState } from "react";

const SearchBox = ({ filterContactsByName }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchTerm(value);
        filterContactsByName(value);
    }
    return (
        <div>
            <label htmlFor="searchInput">Find contacts by name</label>
            <input
                type='text'
                id="searchInput"
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );
};
export default SearchBox;