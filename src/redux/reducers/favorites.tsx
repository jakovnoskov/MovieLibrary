const INITIAL_STATE = {
  selectedFavoritesItem: [],
  favoritesList: [],
}

export default (_state = INITIAL_STATE, action: any) => {
  switch (action.type) {

    case 'SCREEN-FAVORITES/SET_SELECTED_FAVORITES_ITEM':
      return {
        ..._state,
        selectedFavoritesItem: action.value,
      }
    case 'SCREEN-FAVORITES/SET_FAVORITES':
      return {
        ..._state,
        favoritesList: action.value,
      }

    default:
      return _state
  }
}        