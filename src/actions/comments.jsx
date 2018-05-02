import * as types from '../config/types';
import Api from '../config/api';

export function fetchComments(id) {
  return (dispatch, getState) => {
    dispatch(getComments());
    return Api.get(`/posts/${id}/comments`, null).then(resp => {
      dispatch(commentsFetched(resp));
    }).catch((ex) => {
      dispatch(fetchCommentsFailed());
      console.log(ex);
    });
  }
}

function getComments() {
  return {
    type: types.GET_COMMENTS,
  }
}

function commentsFetched(response) {
  return {
    type: types.COMMENTS_FETCHED,
    response
  }
}

function fetchCommentsFailed() {
  return {
    type: types.FETCH_COMMENTS_FAILED
  }
}

