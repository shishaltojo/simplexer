import * as React from 'react';
import styled from 'styled-components';

const StyledMessage = styled.p``;

const Message = ({ children }) => {
  return <StyledMessage>{children}</StyledMessage>;
}

export default Message;