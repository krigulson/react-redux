import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import { ShowLink, AuthorLink } from '../helpers/LinkHelper';

class Post extends Component {

  render() {
    const { title, body, id} = this.props;
    return (
      <Panel bsStyle="primary">
        <Panel.Heading>
          <div className="pull-right">
            <ShowLink link={`/posts/${id}`} />
            <AuthorLink link={`/users/${id}`} />
          </div>
          { title }
        </Panel.Heading>
        <Panel.Body>
          { body }
        </Panel.Body>
      </Panel>
    );
  }

}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
