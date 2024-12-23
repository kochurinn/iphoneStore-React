import { useState } from "react"

const Sort = ({ value, onChange }) => {

    const arrSortName = ['возрастанию цены', 'убыванию цены']
    const selected = arrSortName[value]
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
                        onClick={() => {
                                onChange(i)
                                setOpenSort(!openSort)
                            }
                        }
                        className={i === value ? 'active' : ''}
                    >
                        {sortName}
                    </li>
                ))
            }
            </ul>
        </div>
        </>
    )
}

export default Sort