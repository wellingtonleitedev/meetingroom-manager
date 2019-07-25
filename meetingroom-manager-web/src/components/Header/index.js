import React from "react";
import { Container, Nav, Item, Perfil, Button } from "./styles";

const Header = () => (
  <Container>
    <Nav>
      <Item to="new-room">Adicionar nova sala</Item>
      <Item to="reservation">Reservar sala</Item>
    </Nav>
    <Perfil>
      <Item>Wellington</Item>
      <Button>Logout</Button>
    </Perfil>
  </Container>
);

export default Header;
