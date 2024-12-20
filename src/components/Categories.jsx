import { useState } from "react"

const Categories = () => {

    const сategories = ['Все', 'Iphone 15', 'Iphone 14']
    const [activeCategory, setActiveCategory] = useState(0)

    const onClickCategories = (i) => {
        setActiveCategory(i)
    }

    return (
        <div className="сategories">
            <ul>
                {
                    сategories.map((category, i) => (
                        <li 
                            onClick={() => onClickCategories(i)}
                            className={i === activeCategory ? 'active' : ''} 
                        >
                            {category}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories