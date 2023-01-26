import React from 'react'

import { MdGroup, MdLocationCity, MdWork} from 'react-icons/md';

import { Container, Header, Avatar, Login, Name, Inner, Data} from './styles'

const Profile = () => (
  <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/111101371?v=4"/>
      <Login>GeorgeAlexsander</Login>
      <Name>George Flores</Name>
    </Header>
    <Inner>
      <Data>
        <MdGroup size={20}/>
        5&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;1<i>&nbsp;seguindo</i>
      </Data>
      <Data>
        <MdWork size={20}/>
        Estudante
      </Data>
      <Data>
        <MdLocationCity size={20}/>
        Pelotas, RS
      </Data>
    </Inner>
  </Container>
);

export default Profile;
