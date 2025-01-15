import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSortBy, setOpened } from "../../redux/slices/sortSlice"
import styles from './Sort.module.scss'

const Sort = () => {

    const dispatch = useDispatch()
    const opened = useSelector((state) => state.sortSlice.opened)

    const arrSortName = [
        ['возрастанию цены', 'asc'], 
        ['убыванию цены', 'desc']
    ]

    const [selectedSortingTypeId, setSelectedSortingTypeId] = useState(0)
    const selectedSortingType = arrSortName[selectedSortingTypeId][0]
    
    return (
        <div className={styles.root}>
            <div className={styles.sort}>
                Сортировать по: <span className={styles.sortList} onClick={() => dispatch(setOpened(!opened))}>{selectedSortingType}</span>
            </div>
            <div className={`${styles.sortBlock} ${opened ? styles.sortBlockActive : ''}`}>
                <ul>
                {
                    arrSortName.map((sortName, i) => (
                        <li
                            key={i}
                            onClick={() => {
                                    dispatch(setSortBy(sortName[1]))
                                    setSelectedSortingTypeId(i)
                                    dispatch(setOpened(!opened))
                                }
                            }
                            className={i === selectedSortingTypeId ? styles.active : ''}
                        >
                            {sortName[0]}
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
    )
}

export default Sort