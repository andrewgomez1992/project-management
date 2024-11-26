import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.aside`
  padding: 2rem;
  background-color: #1c1917;
  color: #f5f5f4;
  min-width: 200px;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #e7e5e4;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const List = styled.ul`
  margin-top: 2rem;
  list-style: none;
  padding: 0;
  margin-left: 0;
`;

const ProjectButton = styled.button`
  width: 100%;
  text-align: left;
  padding: 0.5rem 1rem;
  border: none;
  background: ${(props) => (props.selected ? '#292524' : 'none')};
  color: #f5f5f4;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;

  &:hover {
    background-color: #292524;
  }
`;

const Sidebar = ({
  onSelectProject,
  onStartAddProject,
  projects,
  selectedProjectId,
}) => {
  return (
    <Container>
      <Title>Your Projects</Title>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <List>
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectButton
              onClick={() => onSelectProject(project.id)}
              selected={project.id === selectedProjectId}
            >
              {project.title}
            </ProjectButton>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default Sidebar;
