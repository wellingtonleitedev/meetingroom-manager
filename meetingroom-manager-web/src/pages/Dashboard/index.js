import React, { Component } from 'react';
import { Container, Menu, Item } from './styles';
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
  render() {
    return (
        <Container>
            <Menu>
                <Item>
                    <Link to="/new-room">Adicionar nova sala</Link>
                </Item>
                <Item>
                    <Link to="/reservations">Minhas reservas</Link>
                </Item>
                <Item>
                    <Link to="reservation">Fazer reserva de sala</Link>
                </Item>
            </Menu>
        </Container>
    );
  }
}
