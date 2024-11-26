import React from 'react';
import styled from 'styled-components';
import Tasks from './Tasks';

const Container = styled.div`
  padding: 2rem;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Header = styled.header`
  margin-bottom: 2rem;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1c1917;
`;

const DeleteButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #e11d48;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #be123c;
  }
`;

const DateText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #374151;
  white-space: pre-wrap; /* Preserve whitespace and wrap text */
`;

const SelectedProject = ({
  tasks,
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
}) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Container>
      <Header>
        <HeaderTop>
          <Title>{project.title}</Title>
          <DeleteButton onClick={onDelete}>Delete</DeleteButton>
        </HeaderTop>
        <DateText>{formattedDate}</DateText>
        <Description>{project.description}</Description>
      </Header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </Container>
  );
};

export default SelectedProject;
