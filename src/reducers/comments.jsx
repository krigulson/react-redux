import * as types from '../config/types';

const initialState = {
  error: false,
  fetching: false,
  comments: [],
  comment: {}
};

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_COMMENTS: {
      return {
        ...state,
        error: false,
        fetching: true
      };
    }
    case types.COMMENTS_FETCHED: {
      console.log(action);
      return {
        ...state,
        error: false,
        fetching: false,
        comments: action.response
      };
    }
    case types.COMMENT_FETCHED: {
      console.log(action);
      return {
        ...state,
        error: false,
        fetching: false,
        comment: action.response
      };
    }
    case types.FETCH_COMMENTS_FAILED: {
      return {
        ...state,
        error: true,
        fetching: false
      };
    }
    default:
      return state;
  }
};
