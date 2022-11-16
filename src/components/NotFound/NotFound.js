import React from "react";
import {useHistory} from 'react-router-dom';

function NotFound() {
    const history = useHistory();
    return(
        <div className="not-found">
            <h1 className="not-found__error">404</h1>
            <p className="not-found__error-text">Страница не найдена</p>
            <a className="not-found__link" onClick={history.goBack}>Назад</a>
        </div>
    )
}

export default NotFound;