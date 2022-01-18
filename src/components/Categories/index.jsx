import React from "react";


function Categories({ items, onClickItem }) {
    const [activeItem, setActiveItem] = React.useState(null); // "useState" нужен для того, чтобы оповестить компонент о том, что нужно изменить

    const onSelectItem = (index) => {
        setActiveItem(index);
    }

    return(
        <div className="categoriesContainer">
            <ul>
                <li 
                    className={activeItem === null ? 'categoriesLiActive' : ''}  // Если в "activeItem" будет "null", то "li - все" будет активный класс
                    onClick={() => onSelectItem(null)}
                >
                    Все
                </li>
                {items &&
                    items.map((name, index) => ( // Если "items" хранит отрицательное значение, то ".map" не отрендерит список "li"
                    <li 
                        className={activeItem === index ? 'categoriesLiActive' : ''} // Если в "activeItem" будет "index", то "li" поменяется на активный класс.
                        onClick={() => onSelectItem(index)}
                        key={`${name}_${index}`} // Создаём уникальный ключ
                    >
                        {name}
                    </li>
                ))}
                {/* <li>Для бега</li>
                <li>Для осени</li>
                <li>Для зимы</li> */}
            </ul>
        </div>
    );
}

export default Categories;