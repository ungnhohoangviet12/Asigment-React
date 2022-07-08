import { useEffect } from "react";
import './App.css';

function Filter() {
    return (
        <div className="filter-container">
            <button>All</button>
            <button>Comedy</button>
            <button>Action</button>
        </div>
    );
}

export default Filter;