import { useState, useRef } from "react"
import styles from "./Search.module.scss"
import { setSearchValue } from "../../redux/slices/searchSlice"
import { useDispatch, useSelector } from "react-redux"

const Search = () => {

    const dispatch = useDispatch()
    const searchValue = useSelector((state) => state.searchSlice.searchValue)
    const inputRef = useRef()

    const onChangeSearch = (value) => {
        dispatch(setSearchValue(value))
    }

    const clearSearchValue = () => {
        dispatch(setSearchValue(''))
        inputRef.current.focus()
    }

    return (
        <div className={styles.root}>
            <img src="/img/search.svg" alt="" />
            <input 
                ref={inputRef}
                type="text" 
                placeholder="Поиск..." 
                value={searchValue}
                onChange={(e) => onChangeSearch(e.target.value)}
            />
            <img 
                className={`${styles.cross} ${searchValue ? styles.active : ''}`}
                onClick={clearSearchValue}
                src="img/cross.svg" 
                alt="" 
            />
        </div>
    )
}

export default Search