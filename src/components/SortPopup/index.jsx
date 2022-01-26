import React from "react";


function SortPopup({ items }) {
    // Устанавливаем какая переменная будет контролировать открытие "popup-menu".
    // Если мы вызываем функцию "useState", то мы по умолчанию передаём значение "false" в "visiblePopup".
    // Таким образом изначально "SortPopup" будет скрыт.
    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState(0);
    const sortRef = React.useRef(null); // "useRef" нужен для того, чтобы всегда хранить актуальные значения. (Так как JavaScript может вернуть старое значение. Чтобы этого не произошло используют "useRef")
    const activeName = items[activeItem]

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    };

    const handleOutsideClick = (e) => { // Проверяем, что клик был сделан вне области.
        if (!e.path.includes(sortRef.current)) {
            setVisiblePopup(false); // И если клик был сделан вне области, то скрываем "popup".
        }
    }

    const onSelectItem = (index) => {
        setActiveItem(index);
        setVisiblePopup(false); // Когда мы кликаем на один из элементов в "popup", то "popup" скрывается автоматически.
    }

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    return(
        <div className="sortPopupContainer" ref={sortRef}>
            <div className="popupContainerText">
                <p>Сортировка по:</p>
                <span onClick={toggleVisiblePopup}>{activeName}</span>
            </div>
            
            {/* Если "visiblePopup = true", то отрисовывается этот "popup" */}
            {visiblePopup && <div className="sortPopupMenu">
                <ul>
                    {items &&
                        items.map((name, index) => (
                            <li 
                                className={activeItem === index ? 'listActive' : ''} 
                                key={`${name}_${index}`}
                                onClick={() => onSelectItem(index)}
                            >
                                {name}
                            </li>
                        ))
                    }
                </ul>
            </div>}
        </div>
    );
}

export default SortPopup;