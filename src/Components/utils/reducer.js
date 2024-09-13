export const reducer = (state, action) =>{
    switch(action.type){
      case "API_RESPONSE":
        return {...state, api: action.payload}
      case "LOCALSTORAGE":
        return {...state, favs: action.payload}
      case "ADD_DENTIS":
        return {...state, favs: [...state.favs, action.payload]}
      case "DEL_DENTIST":
        return {...state, favs: state.favs.filter((dentist) => dentist.id != action.payload.id)}
      case "TOGGLE_THEME":
        return {...state, theme: state.theme == "light" ? "dark" : "light"}
      case "RESET_FAVS":
        return {...state, favs: []}
      default:
          return state;
    }
  }