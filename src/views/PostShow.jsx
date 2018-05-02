import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid, Row, Col } from 'react-bootstrap';
import { ActionCreators } from '../actions';
import Post from '../components/Post';

class PostShow extends Component {
  componentDidMount() {
    const postId = this.props.match.params.id
    this.props.onGetPost(postId);
  }

  render() {
    const { post, error, fetching } = this.props;
    return (
      <Grid>
        <Row>
          <Col lg={12}>
            {(fetching && <h1>Loading...</h1>) ||
              (error && <h1>Error...</h1>) ||
              <Post key={post.id} {...post} />
            }
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return state.posts
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPost: (id) => { dispatch(ActionCreators.fetchPost(id)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
