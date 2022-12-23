import React from "react";

export const moviePerRow = () => {
    if (window.innerWidth > 320) {
        return 8
    } else {
        return 5
    }
}

export const handleMoreImage = (setNext, next) => {
    if (window.innerWidth > 768) {
        setNext(next + 4)
    } else {
        setNext(next + 2);
    }
}
