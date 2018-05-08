import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, PageHeader, Table } from 'react-bootstrap';
import { ActionCreators } from '../actions';
import BackButton from '../helpers/LinkHelper';
import { MoonLoader } from 'react-spinners';


class UserShow extends Component {
  componentDidMount() {
    const userId = this.props.match.params.id
    this.props.onGetUser(userId);
  }

  render() {
    const { user, error, fetching } = this.props;
    return (
      <Grid>
        <Row>
          <PageHeader>
            {user.name}
            <div className="pull-right">
              <BackButton />
            </div>
          </PageHeader>
          <Col lg={4}>
            {
              (fetching && <MoonLoader />) ||
              (error && <h1>Error...</h1>) ||
              <div>
                <Table striped bordered>
                  <tbody>
                    <tr>
                      <th>Name:</th>
                      <td>{user.name}</td>
                    </tr>
                    <tr>
                      <th>Username:</th>
                      <td>{user.username}</td>
                    </tr>
                    <tr>
                      <th>Email:</th>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <th>Phone:</th>
                      <td>{user.phone}</td>
                    </tr>
                    <tr>
                      <th>Address:</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Website:</th>
                      <td>{user.website}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            }
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return state.users
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUser: (id) => { dispatch(ActionCreators.fetchUser(id)) },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
