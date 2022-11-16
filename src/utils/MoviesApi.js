class MoviesApi {
    constructor({ baseUrl, headers }) {
        this._headers = headers;
        this._baseUrl = baseUrl;
    }

    _checkResponse(res) {
        return res.ok ? res.json() : Promise.reject(res.status)
    }

    getMovies() {
        return fetch(`${this._baseUrl}`, {
            headers: this._headers
        })
            .then(this._checkResponse)
    }
}

export const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json'
    }
});