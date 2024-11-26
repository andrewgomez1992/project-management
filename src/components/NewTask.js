import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  outline: none;
  &:focus {
    border-color: #1c1917;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  background-color: #1c1917;
  color: #f5f5f4;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0f0e0d;
  }
`;

const NewTask = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAdd = () => {
    if (task.trim() === '') {
      return;
    }
    onAdd(task);
    setTask('');
  };

  return (
    <Container>
      <Input
        type='text'
        placeholder='New Task'
        onChange={handleChange}
        value={task}
      />
      <Button onClick={handleAdd}>Add Task</Button>
    </Container>
  );
};

export default NewTask;
