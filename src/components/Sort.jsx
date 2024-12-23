import { useState } from "react"

const Sort = ({ value, onChange }) => {

    const arrSortName = [['возрастанию цены', 'asc'], ['убыванию цены', 'desc']]
    const selected = arrSortName[value][0]
    const [openSort, setOpenSort] = useState(false)
    
    return (
        <>
        <div className='sort'>
                Сортировать по: <span className='sort-list' onClick={() => setOpenSort(!openSort)}>{selected}</span>
        </div>
        <div className={`sort-block ${openSort ? 'sort-block__active' : ''}`}>
            <ul>
            {
                arrSortName.map((sortName, i) => (
                    <li
                        key={i}
                        onClick={() => {
                                onChange(i, sortName[1])
                                setOpenSort(!openSort)
                            }
                        }
                        className={i === value ? 'active' : ''}
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