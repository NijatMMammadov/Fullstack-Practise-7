import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export let FavoritesContext = createContext()

function FavoritesProvider({ children }) {
    let localFavorites = JSON.parse(localStorage.getItem("favorites"))
    let [favorites, setFavorites] = useState(localFavorites ?  localFavorites : [])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    const value = {
        favorites,
        setFavorites
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesProvider
