import React, { Component } from "react";
import { Container, Form, Input, Button } from "./styles";
import api from "../../services/api";

export default class Signin extends Component {
  state = {
    email: "",
    password: "",
    error: null,
  };

  handleSignin = async e => {
    e.preventDefault();

    console.log(e);

    const { history } = this.props;
    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({
        error: "Você precisa preencher todos os campos!"
      });
    } else {
      try {
        const {data} = await api.get(`user/get?email=${email}&password=${password}`);
        console.log(data);
        history.push("dashboard");
      } catch (err) {
        this.setState({
          error: "Não foi possível fazer login, verifique suas credenciais!"
        });
      }
    }
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <Container>
        <Form onSubmit={this.handleSignin}>
          {error && <h5>{error}</h5>}
          <Input
            type="email"
            value={email}
            placeholder="Digite o seu e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Input
            type="password"
            value={password}
            placeholder="Digite sua senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <Button type="submit">Enviar</Button>
        </Form>
      </Container>
    );
  }
}
