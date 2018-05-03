import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
export const ShowLink = ({ link }) => {
  return (
    <Link to={link}>
      <Button bsStyle="default" bsSize="xsmall">
        Show
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
