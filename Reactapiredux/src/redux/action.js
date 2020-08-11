import {
  FETCH_RANDOM_QUOTE_FAILURE,
  FETCH_RANDOM_QUOTE_SUCCESS,
  FETCH_RANDOM_QUOTE_REQUEST,
  FETCH_RANDOM_QUOTE_LIST_FAILURE,
  FETCH_RANDOM_QUOTE_LIST_SUCCESS,
  FETCH_RANDOM_QUOTE_LIST_REQUEST
} from "./actionType";
import axios from "axios";
export const randomQuoteRequest = () => ({
  type: FETCH_RANDOM_QUOTE_REQUEST
});

export const randomQuoteSuccess = (payload) => ({
  type: FETCH_RANDOM_QUOTE_SUCCESS,
  payload
});

export const randomQuoteFailure = (payload) => ({
  type: FETCH_RANDOM_QUOTE_FAILURE,
  payload
});

export const getRandomQuote = (payload) => (dispatch) => {
  dispatch(randomQuoteRequest());

  return (
    axios
      // .get("https://programming-quotes-api.herokuapp.com/quotes/random")
      .get("https://api.spacexdata.com/v3/history")
      .then((res) => res)
      .then((res) => dispatch(randomQuoteSuccess(res)))
      .catch((err) => dispatch(randomQuoteFailure(err)))
  );
};

// QUOTES_LIST action

export const quoteListRequest = () => ({
  type: FETCH_RANDOM_QUOTE_LIST_REQUEST
});

export const quoteListSuccess = (payload) => ({
  type: FETCH_RANDOM_QUOTE_LIST_SUCCESS,
  payload
});

export const quoteListFailure = (payload) => ({
  type: FETCH_RANDOM_QUOTE_LIST_FAILURE,
  payload
});

export const getQuoteList = (page) => (dispatch) => {
  dispatch(quoteListRequest());

  return (
    axios
      // .get(
      //   "https://programming-quotes-api.herokuapp.com/quotes/page/" + (page || 1)
      // )
      .get("https://api.spacexdata.com/v3/payloads")
      .then((res) => res.data)
      .then((res) => dispatch(quoteListSuccess(res)))
      .catch((err) => dispatch(quoteListFailure(err)))
  );
};
