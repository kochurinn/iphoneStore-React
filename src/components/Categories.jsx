import { useSelector, useDispatch } from "react-redux"
import { updateCategoryId as updateCategoryId } from "../redux/slices/filterSlice"

const Categories = ({ value, onChange }) => {

    const categoryId = useSelector((state) => state.filter.value)
    const dispatch = useDispatch()

    const сategories = [
        ['Все', null], 
        ['Iphone 16', '16'], 
        ['Iphone 15', '15'], 
        ['Iphone 14', '14']
    ]

    return (
        <div className="сategories">
            <ul>
                {
                    сategories.map((category, i) => (
                        <li 
                            key={i}
                            onClick={() => dispatch(updateCategoryId(i))}
                            className={i === value ? 'active' : ''} 
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