import React, { Component, Fragment } from "react";
import { Container, Nav, Item, Perfil, Button } from "./styles";
import { getUser, logout } from '../../services/auth'

export default class Header extends Component {
  state = {
    user: {}
  }

  componentDidMount(){
    this.setUser();
  }

  setUser = async () => {
    const user = await getUser();

    this.setState({ user });
  }

  handleLogout = async () => {
    await logout();
    window.location.reload()
  }

  render(){
    const { show } = this.props;
    const {user} = this.state;

    return(
      <Container>
        <Nav>
        {show &&
          ( 
            <Fragment>
              <Item to="new-room">Adicionar nova sala</Item>
              <Item to="reservation">Reservar sala</Item>
            </Fragment>
          )}
          </Nav>
        <Perfil>
          <Item>{user.name}</Item>
          <Button onClick={() => this.handleLogout()} >Logout</Button>
        </Perfil>
      </Container>
    );
  }
}

Header.defaultProps = {
  show: true,
}
