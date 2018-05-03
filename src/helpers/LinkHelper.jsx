import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export const ShowLink = ({ link }) => {
  return (
    <Link to={link}>
      <Button bsStyle="default" bsSize="xsmall">
        Show post
      </Button>
    </Link>
  )
}

export const BackLink = ({ link }) => {
  return (
    <Link to={link}>
      <Button bsSize="xsmall">
        Back
      </Button>
    </Link>
  )
}

export const AuthorLink = ({ link }) => {
  return (
    <Link to={link}>
      <Button bsStyle="info" bsSize="xsmall">
        Show author
      </Button>
    </Link>
  )
}

class BackButton extends Component {
  static contextTypes = {
    router: () => true, // replace with PropTypes.object if you use them
  }

  render() {
    return (
      <Button onClick={this.context.router.history.goBack}>Back</Button>
    )
  }
}

export default BackButton;
