import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

import { ActionCreators } from '../actions';
import Post from '../components/Post';
import { MoonLoader } from 'react-spinners';

class Home extends Component {

  componentDidMount() {
    this.props.onGetPosts();
  }

  render() {
    const { posts, error, fetching } = this.props;
    return (
      <Grid>
        <Row>
          <Col lg={12}>
            <PageHeader>All posts</PageHeader>
            {
              (fetching && <MoonLoader />) ||
              (error && <h1>Error...</h1>) ||
              _.map(posts, (post, id) => {
                return <Post key={ post.id } {...post} />
              })
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
    onGetPosts: () => { dispatch(ActionCreators.fetchPosts()) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
