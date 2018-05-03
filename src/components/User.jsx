import React, { Component } from 'react';
import { connect } from 'react-redux';


class User extends Component {

  render() {
    const { name, username, email } = this.props;
    return (
      <tr>
        <td>{ name }</td>
        <td>{ username }</td>
        <td>{ email }</td>
      </tr>
    );
  }

}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
