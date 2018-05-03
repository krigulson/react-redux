import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import { ActionCreators } from '../actions';
import Post from '../components/Post';
import Comment from '../components/Comment';
import BackButton from '../helpers/LinkHelper';

class PostShow extends Component {
  componentDidMount() {
    const postId = this.props.match.params.id
    this.props.onGetPost(postId);
    this.props.onGetComments(postId);
  }

  render() {
    const { post, comments, error, fetching } = this.props;
    return (
      <Grid>
        <Row>
          <Col lg={12}>
            {
              (fetching && <h1>Loading...</h1>) ||
              (error && <h1>Error...</h1>) ||
              <div>
                <PageHeader>
                  Post
                  <div className="pull-right">
                    <BackButton />
                  </div>
                </PageHeader>
                <Post key={post.id} {...post} />
                <PageHeader>Comments</PageHeader>
                {
                  _.map(comments, (comment, id) => {
                    return <Comment key={comment.id} {...comment} />
                  })
                }
              </div>
            }
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return Object.assign(
    {},
    state.posts,
    state.comments
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPost: (id) => { dispatch(ActionCreators.fetchPost(id)) },
    onGetComments: (id) => { dispatch(ActionCreators.fetchComments(id)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
