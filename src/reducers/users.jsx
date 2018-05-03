import * as types from '../config/types';

const initialState = {
  error: false,
  fetching: false,
  users: [],
  user: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USER:
    case types.GET_USERS: {
      return {
        ...state,
        error: false,
        fetching: true
      };
    }
    case types.USERS_FETCHED: {
      console.log(action);
      return {
        ...state,
        error: false,
        fetching: false,
        users: action.response
      };
    }
    case types.USER_FETCHED: {
      console.log(action);
      return {
        ...state,
        error: false,
        fetching: false,
        user: action.response
      };
    }
    case types.FETCH_USER_FAILED:
    case types.FETCH_USERS_FAILED: {
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
