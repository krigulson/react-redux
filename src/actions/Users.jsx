import * as types from '../config/types';
import Api from '../config/api';

//GET all users
export function fetchUsers() {
  return (dispatch, getState) => {
    dispatch(getUsers());
    return Api.get(`/users`, null).then(resp => {
      dispatch(usersFetched(resp));
    }).catch((ex) => {
      dispatch(fetchUsersFailed());
      console.log(ex);
    });
  }
}

function getUsers() {
  return {
    type: types.GET_USERS,
  }
}

function usersFetched(response) {
  return {
    type: types.USERS_FETCHED,
    response
  }
}

function fetchUsersFailed() {
  return {
    type: types.FETCH_USERS_FAILED
  }
}

//GET single user

export function fetchUser(id) {
  return (dispatch, getState) => {
    dispatch(getUser());
    return Api.get(`/users/${id}`, null).then(resp => {
      dispatch(userFetched(resp));
    }).catch((ex) => {
      dispatch(fetchUserFailed());
      console.log(ex);
    });
  }
}

function getUser() {
  return {
    type: types.GET_USER,
  }
}

function userFetched(response) {
  return {
    type: types.USER_FETCHED,
    response
  }
}

function fetchUserFailed() {
  return {
    type: types.FETCH_USER_FAILED
  }
}
