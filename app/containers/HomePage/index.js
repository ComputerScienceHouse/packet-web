/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import {
  Badge,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 24px;
  margin-right: 10px;
  width: 24px;
`;

const SignaturesBadge = styled(Badge)`
  background-color: #4caf50;
`;

const Name = styled.span`
  color: #000000;
`;

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ListGroup>
        <ListGroupItem bsStyle="success">
          <ProfilePicture src="https://profiles.csh.rit.edu/image/test" />
          <Name>Ram Zallan</Name>
          <SignaturesBadge>69</SignaturesBadge>
        </ListGroupItem>
        <ListGroupItem>
          <ProfilePicture src="https://profiles.csh.rit.edu/image/test" />
          <Name>Devin Matte</Name>
          <SignaturesBadge>69</SignaturesBadge>
        </ListGroupItem>
        <ListGroupItem>
          <ProfilePicture src="https://profiles.csh.rit.edu/image/test" />
          <Name>Stephen Greene</Name>
          <SignaturesBadge>69</SignaturesBadge>
        </ListGroupItem>
      </ListGroup>
    );
  }
}
