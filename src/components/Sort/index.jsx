import { useState } from "react"
import { useDispatch } from "react-redux"
import { setSortBy } from "../../redux/slices/sortSlice"
import styles from './Sort.module.scss'

const Sort = () => {

    const dispatch = useDispatch()

    const arrSortName = [
        ['возрастанию цены', 'asc'], 
        ['убыванию цены', 'desc']
    ]
    
    const [openSort, setOpenSort] = useState(false)
    const [selectedSortingTypeId, setSelectedSortingTypeId] = useState(0)
    const selectedSortingType = arrSortName[selectedSortingTypeId][0]
    
    return (
        <div className={styles.root}>
            <div className='sort'>
                Сортировать по: <span className={styles['sort-list']} onClick={() => setOpenSort(!openSort)}>{selectedSortingType}</span>
            </div>
            <div className={`${styles['sort-block']} ${openSort ? styles['sort-block--active'] : ''}`}>
                <ul>
                {
                    arrSortName.map((sortName, i) => (
                        <li
                            key={i}
                            onClick={() => {
                                    dispatch(setSortBy(sortName[1]))
                                    setSelectedSortingTypeId(i)
                                    setOpenSort(!openSort)
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