const INITIAL_STATE = {
    favoritesList: [],
  }
  
  export default (_state = INITIAL_STATE, action:any) => {
    switch (action.type) {
  
      case 'SCREEN-FAVORITES/SET_FAVORITES':
        return {
          ..._state,
          favoritesList: action.value,
        }
  
        default:
          return _state
      }
    }        