import {
  FETCH_RANDOM_QUOTE_FAILURE,
  FETCH_RANDOM_QUOTE_SUCCESS,
  FETCH_RANDOM_QUOTE_REQUEST,
  FETCH_RANDOM_QUOTE_LIST_FAILURE,
  FETCH_RANDOM_QUOTE_LIST_REQUEST,
  FETCH_RANDOM_QUOTE_LIST_SUCCESS
} from "./actionType";

const initalStae = {
  randomData: {},
  listData: [],
  isLoad: false,
  err: false
};

export default (state = initalStae, { type, payload }) => {
  // console.log(payload);
  switch (type) {
    case FETCH_RANDOM_QUOTE_REQUEST:
      return {
        ...state,
        isLoad: true
      };

    case FETCH_RANDOM_QUOTE_SUCCESS:
      return {
        ...state,
        isLoad: false,
        randomData: payload
      };

    case FETCH_RANDOM_QUOTE_FAILURE:
      return {
        ...state,
        isLoad: true,
        err: true
      };

    case FETCH_RANDOM_QUOTE_LIST_REQUEST:
      return {
        ...state,
        isLoad: true
      };

    case FETCH_RANDOM_QUOTE_LIST_SUCCESS:
      return {
        ...state,
        isLoad: false,
        listData: payload
      };

    case FETCH_RANDOM_QUOTE_LIST_FAILURE:
      return {
        ...state,
        isLoad: true,
        err: true
      };
    default:
      return state;
  }
};
