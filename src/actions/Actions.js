import axios from "axios";

export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const SEARCH_MOVIES_FAILURE = "SEARCH_MOVIES_FAILURE";

export const searchMovies = (payload) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:3000/movies/search?query=` + payload
    );
    dispatch({
      type: SEARCH_MOVIES,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: SEARCH_MOVIES_FAILURE,
      payload: console.log(e),
    });
  }
};
