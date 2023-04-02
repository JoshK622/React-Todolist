import { useState } from 'react';

function Filter({ onFilterChange }) {
    const [activeFilter, setActiveFilter] = useState('All');

    const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
};

    return (
        <div>
            <button onClick={() => handleFilterClick('All')} className={activeFilter === 'All' ? 'active' : ''}>
                All
            </button>
            <button onClick={() => handleFilterClick('Todo')} className={activeFilter === 'Todo' ? 'active' : ''}>
                Todo
            </button>
            <button onClick={() => handleFilterClick('Done')} className={activeFilter === 'Done' ? 'active' : ''}>
                Done
            </button>
        </div>
    );
}

export default Filter;