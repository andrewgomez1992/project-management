import React from 'react';
import styled from 'styled-components';
import notesImg from '../assets/no-projects.png';
import Button from './Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  height: 100vh;
  text-align: center;
  padding: 2rem;
`;

const Image = styled.img`
  max-width: 30%;
  height: auto;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #1c1917;
`;

const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #4b5563;
`;

const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <Container>
      <Image src={notesImg} alt='No Project Selected' />
      <Title>No Project Selected</Title>
      <Text>Select a project or get started with a new one</Text>
      <Text>
        <Button onClick={onStartAddProject}>Create New Project</Button>
      </Text>
    </Container>
  );
};

export default NoProjectSelected;
