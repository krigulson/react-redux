import * as PostActions from './post';
import * as CommentActions from './comments';

export const ActionCreators = Object.assign({},
  PostActions,
  CommentActions
);
