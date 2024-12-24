const Search = ({ searchValue, onChangeSearch }) => {
    return (
        <div>
            <img src="/img/search.svg" alt="" />
            <input 
                type="text" 
                placeholder="Поиск..." 
                value={searchValue}
                onChange={(e) => onChangeSearch(e.target.value)}
            />
        </div>
    )
}

export default Search