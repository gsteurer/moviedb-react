import { SEARCH_MOVIES } from "../actions/Actions";

const initialState = {
  movies: [],
  loading: false,
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIES:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
}
