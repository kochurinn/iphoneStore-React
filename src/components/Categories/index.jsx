import { useDispatch, useSelector } from "react-redux"
import { setActiveCategoryId, setActiveCategoryType } from "../../redux/slices/filterSlice"
import styles from './Categories.module.scss'

const Categories = () => {

    const dispatch = useDispatch()
    const activeCategoryId = useSelector((state) => state.filterSlice.categoryId)
 
    const сategories = [
        ['Все', null], 
        ['Iphone 16', '16'], 
        ['Iphone 15', '15'], 
        ['Iphone 14', '14']
    ]

    return (
        <div className={styles.root}>
            <ul>
                {
                    сategories.map((category, i) => (
                        <li 
                            key={i}
                            onClick={() => {
                                dispatch(setActiveCategoryId(i))
                                dispatch(setActiveCategoryType(category[1]))
                            }}
                            className={i === activeCategoryId ? styles.active : ''} 
                        >
                            {category[0]}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories