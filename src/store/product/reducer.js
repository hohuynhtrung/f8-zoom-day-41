import { GET_DETAIL, GET_LIST, SET_DETAIL, SET_LIST } from "./constants";

const initialState = {
  list: [],
  detail: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
      };
    case SET_LIST:
      return {
        ...state,
        list: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
      };
    case SET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
