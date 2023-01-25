import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Container, Logo, Title, Form, Input, Button } from './styles';

import githubLogo from '../../assets/images/github-logo.svg';

const MainPage = () => (
    <Container>
      <Logo img src={githubLogo} alt="Github Logo"/>
      <Title>Api Github</Title>
      <Form>
        <Input placeholder="Usuário" />
        <Button>
          <MdSearch size={42} /> 
        </Button>
      </Form>
    </Container>
);

export default MainPage;
