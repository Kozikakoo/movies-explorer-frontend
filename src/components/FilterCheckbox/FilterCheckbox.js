import React from "react";

function FilterCheckbox(props) {

    const handleCheckboxClick = () => {
        props.onClickCheckbox()
    }


    return(
            <label className="form-switch">
                <input type="checkbox" className="form-switch__text" onClick={handleCheckboxClick} />
                    <i></i>Короткометражки</label>


    )
}

export default FilterCheckbox;