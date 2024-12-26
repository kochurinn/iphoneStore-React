import { useContext } from "react"
import { SearchContext } from "../../App"
import styles from "./Search.module.scss"

const Search = () => {

    const {searchValue, setSearchValue} = useContext(SearchContext)

    const onChangeSearch = (value) => {
        setSearchValue(value)
    }

    return (
        <div className={styles.root}>
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