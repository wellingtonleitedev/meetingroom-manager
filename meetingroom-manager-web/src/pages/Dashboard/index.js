import React, { Fragment } from "react";
import { Container, Menu, Item } from "./styles";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const Dashboard = () => (
  <Fragment>
    <Header show={false}/>
    <Container>
      <Menu>
        <Item>
          <Link to="/new-room">Adicionar nova sala</Link>
        </Item>
        <Item>
          <Link to="reservation">Fazer reserva de sala</Link>
        </Item>
      </Menu>
    </Container>
  </Fragment>
);

export default Dashboard;