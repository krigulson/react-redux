import  * as types from '../config/types';

const initialState = {
  error: false,
  fetching: false,
  posts: [],
  post: {}
};

export default function postReducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_POST:
    case types.GET_POSTS: {
    return {
        ...state,
        error: false,
        fetching: true
      };
    }
    case types.POSTS_FETCHED: {
      console.log(action);
      return {
        ...state,
        error: false,
        fetching: false,
        posts: action.response
      };
    }
    case types.POST_FETCHED: {
      console.log(action);
      return {
        ...state,
        error: false,
        fetching: false,
        post: action.response
      };
    }
    case types.FETCH_POST_FAILED:
    case types.FETCH_POSTS_FAILED: {
      return {
        ...state,
        error: true,
        fetching: false
      };
    }
    case 'ADD_POST':
      return Object.assign({}, state, {
        posts: state.posts.concat([action.post])
      })
    case 'DELETE_POST':
      return Object.assign({}, state, {
        posts: state.posts.filter((post) =>
          post.id !== action.id
        )
      })
    default:
      return state;
  }
};
