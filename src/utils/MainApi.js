class MainApi {
    constructor({baseUrl, headers}) {
        this._headers = headers;
        this._baseUrl = baseUrl;
    }

    _checkResponse(res) {
        return res.ok ? res.json() : Promise.reject(res.status)
    }

    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
            .then(this._checkResponse)
    }

    editProfile(email, name) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                email,
                name
            })
        })
            .then(this._checkResponse)
    }

    getSavedMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            headers: this._headers
        })
            .then(this._checkResponse)
    }

    addMovies(
                  country,
                  director,
                  duration,
                  year,
                  description,
                  image,
                  trailerLink,
                  nameRU,
                  nameEN,
                  thumbnail,
                  movieId) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                country,
                director,
                duration,
                year,
                description,
                image,
                trailerLink,
                nameRU,
                nameEN,
                thumbnail,
                movieId
            })
        })
            .then(this._checkResponse)
    }

    deleteMovie(id) {
        return fetch(`${this._baseUrl}/movies/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._checkResponse)
    }
}

export const mainApi = new MainApi({
    baseUrl: 'https://api.movies.explorer.demo.nomoredomains.icu',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json'
    }
});