import * as React from 'react';
import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Row = ({ children }) => {
  return (
    <StyledRow>{children}</StyledRow>
  );
}

export default Row;