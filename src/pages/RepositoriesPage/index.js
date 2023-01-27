import React from 'react';
import Filter from './Filter';
import Profile from './Profile';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

const RepositoriesPage = () => {
  const user = {
    login: 'GeorgeAlexsander',
    name: 'George Flores',
    avatar_url: 'https://avatars.githubusercontent.com/u/111101371?v=4',
    followers: 1,
    following: 5,
    company: null,
    blog: 'www.pudim.com',
    location: 'Pelotas, RS',
  };

  const repositories = [
    {
      name: 'Repo 1',
      description: 'descrição',
      html_url: 'www.pudim.com',
      language: 'Javascript',
    },
    {
      name: 'Repo 2',
      description: 'descrição',
      html_url: 'www.pudim.com',
      language: 'Javascript',
    },
    {
      name: 'Repo 3',
      description: 'descrição',
      html_url: 'www.pudim.com',
      language: 'C++',
    },
    {
      name: 'Repo 4',
      description: 'descrição',
      html_url: 'www.pudim.com',
      language: 'Python',
    },
    {
      name: 'Repo 5',
      description: 'descrição',
      html_url: 'www.pudim.com',
      language: 'C++',
    },
  ];

  // calculo dos filters
  const languages = [
    { name: 'Javascript', count: 2, color: '#f1c40f' },
    { name: 'C++', count: 2, color: '#95a5a6' },
    { name: 'Python', count: 1, color: '#3498db' },
  ];

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
