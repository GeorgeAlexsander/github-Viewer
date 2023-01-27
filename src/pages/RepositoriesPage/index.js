import React from 'react';
import Filter from './Filter';
import Profile from './Profile';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

import { getLangsFrom } from '../../services/api';

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
      id: '1',
      name: 'Repo 0',
      description: 'descrição',
      html_url: 'www.pudim.com',
      language: 'Javascript',
    },
    {
      id: '2',
      name: 'Repo 1',
      description: 'descrição',
      html_url: 'www.pudim.com',
      language: 'Javascript',
    },
    {
      id: '3',
      name: 'Repo 2',
      description: 'descrição',
      html_url: 'www.pudim.com',
      language: 'Javascript',
    },
    {
      id: '4',
      name: 'Repo 3',
      description: 'descrição',
      html_url: 'www.pudim.com',
      language: 'Ruby',
    },
    {
      id: '5',
      name: 'Repo 4',
      description: 'descrição',
      html_url: 'www.pudim.com',
      language: 'Ruby',
    },
    {
      id: '6',
      name: 'Repo 5',
      description: 'descrição',
      html_url: 'www.pudim.com',
      language: 'C++',
    },
  ];

  const languages = getLangsFrom(repositories);

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
