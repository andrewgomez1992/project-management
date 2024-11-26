import { forwardRef } from 'react';
import styled from 'styled-components';

const Container = styled.p`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #1c1917;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  outline: none;
  &:focus {
    border-color: #1c1917;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  outline: none;
  &:focus {
    border-color: #1c1917;
  }
`;

const Input = forwardRef(({ label, textArea, ...props }, ref) => {
  return (
    <Container>
      <Label>{label}</Label>
      {textArea ? (
        <StyledTextarea ref={ref} {...props} />
      ) : (
        <StyledInput ref={ref} {...props} />
      )}
    </Container>
  );
});

export default Input;
