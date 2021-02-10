export const setSelectedFavoritesItem = (value: any) => ({
    type: 'SCREEN-FAVORITES/SET_SELECTED_FAVORITES_ITEM',
    value,
})

export function setFavoritesList(value: any) {
    return {
        type: 'SCREEN-FAVORITES/SET_FAVORITES',
        value
    }
}


