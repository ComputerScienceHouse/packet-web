/**
*
* Navigation
*
*/

import React from 'react';
import styled from 'styled-components';
import {
  Nav,
  Navbar,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 32px;
  margin-right: 5px;
  width: 32px;
`;

class Navigation extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Navbar inverse fixedTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <FormattedMessage {...messages.brand} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <IndexLinkContainer to="/">
              <MenuItem>Freshmen</MenuItem>
            </IndexLinkContainer>
            <LinkContainer to="/upperclassmen">
              <MenuItem>Upperclassmen</MenuItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavDropdown
              eventKey={1}
              title={(
                <span>
                  <ProfilePicture src="https://profiles.csh.rit.edu/image/test" />
                  Testing Tester
                </span>
              )}
              className="navbar-user"
            >
                <MenuItem eventKey={1.1}>Profile</MenuItem>
                <MenuItem eventKey={1.2}>Settings</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={1.3}>Logout</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Navigation.propTypes = {

};

export default Navigation;
