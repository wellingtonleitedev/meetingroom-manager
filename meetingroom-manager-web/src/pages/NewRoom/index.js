import React, { Component, Fragment } from "react";
import { Container, Form, Input, Button } from "./styles";
import api from "../../services/api";
import Header from "../../components/Header";

export default class NewRoom extends Component {
  state = {
    name: "",
    error: null
  };

  componentDidMount() {
    // this.fetchRooms();
  }

  addRoom = async e => {
    e.preventDefault();
    const { name } = this.state;

    if (!name) {
      this.setState({
        error: "Você precisa preencher o nome!"
      });
    } else {
      const room = {
        Name: name
      };

      try {
        await api.post("room/add", room);
      } catch (err) {
        console.log(err);
        this.setState({
          error: "Não foi possível adicionar esta sala!"
        });
      }
    }
  };

  render() {
    const { name, error } = this.state;
    return (
      <Fragment>
        <Header />
        <Container>
          <Form onSubmit={this.addRoom}>
            {error && <h5>{error}</h5>}
            <Input
              onChange={e => this.setState({ name: e.target.value })}
              value={name}
              placeholder="Digite o nome/número da sala"
            />
            <Button type="submit">Enviar</Button>
          </Form>
        </Container>
      </Fragment>
    );
  }
}
