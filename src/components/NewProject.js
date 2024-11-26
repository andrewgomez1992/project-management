import React, { useRef } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Modal from './Modal';

const Container = styled.div`
  width: 100%;
  margin-top: 4rem;

  @media (min-width: 768px) {
    width: 35rem;
  }
`;

const Menu = styled.menu`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  margin: 1rem 0;
  list-style: none;
  padding: 0;
`;

const ButtonBase = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s, color 0.3s;
`;

const CancelButton = styled(ButtonBase)`
  color: #1c1917;
  &:hover {
    color: #0f0e0d;
  }
`;

const SaveButton = styled(ButtonBase)`
  background-color: #1c1917;
  color: #f5f5f4;
  &:hover {
    background-color: #0f0e0d;
  }
`;

const NewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredDueDate.trim().length === 0
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption='Okay'>
        <h2>Invalid Input</h2>
        <p>Oops... looks like you forgot to enter a value</p>
        <p>Please provide a valid value for every input field</p>
      </Modal>
      <Container>
        <Menu>
          <li>
            <CancelButton onClick={onCancel}>Cancel</CancelButton>
          </li>
          <li>
            <SaveButton onClick={handleSave}>Save</SaveButton>
          </li>
        </Menu>
        <div>
          <Input type='text' ref={title} label='Title' />
          <Input ref={description} label='Description' textArea />
          <Input type='date' ref={dueDate} label='Due Date' />
        </div>
      </Container>
    </>
  );
};

export default NewProject;
