import React from 'react';
import Filter from './Filter';
import Profile from './Profile';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

const RepositoriesPage = () => {
  const user = {
    login: "GeorgeAlexsander",
    name: "George Flores",
    avatar_url: "https://avatars.githubusercontent.com/u/111101371?v=4",
    followers: 1,
    following: 5,
    company: null,
    blog: "www.pudim.com",
    location: "Pelotas, RS"
  };

  return(
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter/>
      </Sidebar>
      <Main>
        <Repositories/>
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
