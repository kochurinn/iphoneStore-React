import { useState } from "react"

const Sort = () => {

    const [activeSortName, setActiveSortName] = useState(0)
    const arrSortName = ['возрастанию цены', 'убыванию цены']
    const selected = arrSortName[activeSortName]
    const [openSort, setOpenSort] = useState(false)

    const onClickSortName = (i) => {
        setActiveSortName(i)
        setOpenSort(false)
    }

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
                        onClick={() => onClickSortName(i)}
                        className={i === activeSortName ? 'active' : ''}
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