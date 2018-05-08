import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap';

class Form extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const body = this.getBody.value;
    const id = new Date();
    const post = {
      id,
      title,
      body
    }

    this.props.dispatch({
      type: 'ADD_POST',
      post
    });
    this.getTitle.value = '';
    this.getBody.value = '';
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="postTitle">
          <ControlLabel>Enter post title</ControlLabel>
          <FormControl required componentClass="input" inputRef={ref => { this.getTitle = ref} } placeholder="Enter post title" />
        </FormGroup>
        <FormGroup controlId="postBody">
          <ControlLabel>Enter post content</ControlLabel>
          <FormControl required componentClass="textarea" inputRef={ref => { this.getBody = ref }} placeholder="Enter your post content" />
        </FormGroup>
        <Button type="submit" bsStyle="success">Submit</Button>
      </form>
    );
  }
}

export default connect()(Form);
