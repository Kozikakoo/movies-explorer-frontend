import React from "react";

export const searchFilms = (valueSearchInput) => {
    let regex = `.${valueSearchInput}.`
    return new RegExp(regex, "gi")

}