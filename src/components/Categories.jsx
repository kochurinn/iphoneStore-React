const Categories = ({ value, onChange }) => {

    const сategories = [['Все', null], ['Iphone 15', '15'], ['Iphone 14', '14']]

    return (
        <div className="сategories">
            <ul>
                {
                    сategories.map((category, i) => (
                        <li 
                            key={i}
                            onClick={() => onChange(i, category[1])}
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