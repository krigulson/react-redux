import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

import { ActionCreators } from '../actions';
import Post from '../components/Post';
import Form from '../components/Form';
import MyModal from '../components/Modal';

class AllPosts extends Component {
  componentDidMount() {
    this.props.onGetPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <Grid>
        <Row>
          <Col lg={12}>
            <PageHeader>
              All posts
              <div className="pull-right">
                <MyModal modalTitle={'Create new post'} >
                  <Form />
                </MyModal>
              </div>
            </PageHeader>
              {posts.map((post) => <Post key={ post.id } {...post} />)}
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

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);
