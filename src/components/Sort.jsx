import { useState } from "react"
import { useDispatch } from "react-redux"
import { setSortBy } from "../redux/slices/sortSlice"

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
        <>
        <div className='sort'>
                Сортировать по: <span className='sort-list' onClick={() => setOpenSort(!openSort)}>{selectedSortingType}</span>
        </div>
        <div className={`sort-block ${openSort ? 'sort-block__active' : ''}`}>
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
                        className={i === selectedSortingTypeId ? 'active' : ''}
                    >
                        {sortName[0]}
                    </li>
                ))
            }
            </ul>
        </div>
        </>
    )
}

export default Sort