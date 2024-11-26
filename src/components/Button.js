import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  margin: 0.5rem 0;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  border: none;
  color: #fff;
  background: none;
  outline: none;
  background-color: #292524;

  &:hover {
    color: #e7e5e4;
    background-color: #292524;
  }
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
