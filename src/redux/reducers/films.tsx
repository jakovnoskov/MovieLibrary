const INITIAL_STATE = {
  selectedFilmItem: [],
  menuData: [],
}

export default (_state = INITIAL_STATE, action: any) => {
  switch (action.type) {

    case 'SCREEN-FILM/SET_SELECTED_FILM_ITEM':
      return {
        ..._state,
        selectedFilmItem: action.value,
      }
    case 'SCREEN-FILM/SET_MENU_DATA':
      return {
        ..._state,
        menuData: action.value,
      }

    default:
      return _state
  }
}        