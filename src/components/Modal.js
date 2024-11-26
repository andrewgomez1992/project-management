import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const StyledDialog = styled.dialog`
  width: 90%;
  max-width: 500px;
  border: none;
  border-radius: 8px;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #1c1917;
  color: #f5f5f4;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0f0e0d;
  }
`;

const Modal = forwardRef(({ children, buttonCaption }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
  }));

  return createPortal(
    <StyledDialog ref={dialog}>
      {children}
      <StyledForm method='dialog'>
        <StyledButton>{buttonCaption}</StyledButton>
      </StyledForm>
    </StyledDialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
