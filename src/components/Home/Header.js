import React from "react";
import './Header.css';

export default React.forwardRef((props, ref) => {
    return (
        <header className="headerWrapper">
            <h1>{props.title}</h1>
            <button disabled={props.disabled} ref={ref} onClick={props.onAddItemButtonClick}>
                {props.addButtonText}
            </button>
        </header>
    );
});

