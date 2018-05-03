import * as PostActions from './post';
import * as CommentActions from './comments';
import * as UserActions from './Users';

export const ActionCreators = Object.assign({},
  PostActions,
  CommentActions,
  UserActions
);
