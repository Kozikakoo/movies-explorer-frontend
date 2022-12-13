import React from "react";

export const searchFilms = (valueSearchInput) => {
    let regex = `.${valueSearchInput}.`
    return new RegExp(regex, "gi")
}

// let newRegex = searchFilms(valueSearchInput)
// for (let i = 0; i < res.length; i++) {
//     const stringRes = JSON.stringify(res[i])
//     if (newRegex.test(stringRes) && isCheckShortMovie === true) {
//         if (res[i].duration < 41)
//             foundFilms.push(res[i])
//     } else if (newRegex.test(stringRes) && isCheckShortMovie === false) {
//         foundFilms.push(res[i])
//     }
// }
// setMoviesCards(foundFilms)
// console.log(foundFilms)
// localStorage.setItem("foundFilms", JSON.stringify(foundFilms))
