function FilterButtons({ selectedFilter, onFilterChange }) {
    return (
        <div className="flex items-center gap-4">
            <button
                className={`px-4 py-2 duration-200 ${selectedFilter === 'all' ? 'border-b-fe-purple border-b text-lg' : ''}`}
                onClick={() => onFilterChange('all')}
            >
                Todos
            </button>
            <button
                className={`px-4 py-2 duration-200 ${selectedFilter === 'favorites' ? 'border-b-fe-purple border-b text-lg' : ''}`}
                onClick={() => onFilterChange('favorites')}
            >
                Favoritos
            </button>
        </div>
    );
}

export default FilterButtons;
