const Categories = ({ value, onChange }) => {

    const сategories = ['Все', 'Iphone 15', 'Iphone 14']

    return (
        <div className="сategories">
            <ul>
                {
                    сategories.map((category, i) => (
                        <li 
                            onClick={() => onChange(i)}
                            className={i === value ? 'active' : ''} 
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