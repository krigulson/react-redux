import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Grid, Row, Col, Table, PageHeader} from 'react-bootstrap';
import { ActionCreators } from '../actions';
import User from '../components/User';
import { MoonLoader } from 'react-spinners';

class Users extends Component {

  componentDidMount() {
    this.props.onGetUsers();
  }

  render() {
    const { users, error, fetching } = this.props;
    return (
      <Grid>
        <Row>
          <Col lg={12}>
            {
              (fetching && <MoonLoader />) ||
              (error && <h1>Error...</h1>) ||
              <div>
                <PageHeader>Users</PageHeader>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      _.map(users, (user, id) => {
                        return <User key={user.id} {...user} />
                      })
                    }
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
    onGetUsers: () => { dispatch(ActionCreators.fetchUsers()) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
