import React from 'react';
import styled from 'styled-components';
import NewTask from './NewTask';

const Section = styled.section`
  padding: 2rem;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1c1917;
  margin-bottom: 1rem;
`;

const NewTasks = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1c1917;
  margin-bottom: 1rem;
`;

const NoTasksMessage = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin-bottom: 1rem;
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const TaskText = styled.span`
  font-size: 1rem;
  color: #374151;
`;

const DeleteButton = styled.button`
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background-color: #e11d48;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #be123c;
  }
`;

const Tasks = ({ tasks, onAdd, onDelete }) => {
  return (
    <Section>
      <Title>Tasks</Title>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <NoTasksMessage>
          This project doesn't have any tasks yet.
        </NoTasksMessage>
      )}
      {tasks.length > 0 && (
        <TaskList>
          {tasks.map((task) => (
            <TaskItem key={task.id}>
              <TaskText>{task.text}</TaskText>
              <DeleteButton onClick={() => onDelete(task.id)}>
                Delete
              </DeleteButton>
            </TaskItem>
          ))}
        </TaskList>
      )}
    </Section>
  );
};

export default Tasks;
