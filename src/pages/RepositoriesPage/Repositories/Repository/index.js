import React from 'react';

import { Container, Description, Footer, Lang, Link, Name } from './styles';

const Repository = () => (
  <Container color="#f37272">
    <Name>Repositorie Name</Name>
    <Description>Repositorie Description</Description>
    <Footer color="#f37272">
      <Lang>Repositorie Lang</Lang>
      <Link href="https.//pudim.com" target="_blank">
        Ver
      </Link>
    </Footer>
  </Container>
);

export default Repository;
