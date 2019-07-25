import React, { Component } from "react";
import { Container, Form, Input, Button } from "./styles";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    error: null
  };

  handleSignin = async e => {
    e.preventDefault();

    console.log(e);

    const { history } = this.props;
    const { name, email, password } = this.state;

    if (!name || !email || !password) {
      this.setState({
        error: "Você precisa preencher todos os campos!"
      });
    } else {
      try {
        const user = {
          Name: name,
          Email: email,
          Password: password
        };

        await api.get("user/add", user);
        history.push("/");
      } catch (err) {
        this.setState({
          error: "Não foi possível cadastrar sua conta!"
        });
      }
    }
  };

  render() {
    const { name, email, password, error } = this.state;

    return (
      <Container>
        <Form onSubmit={this.handleSignin}>
          {error && <h5>{error}</h5>}
          <Input
            type="name"
            value={name}
            placeholder="Digite o seu nome completo"
            onChange={e => this.setState({ name: e.target.value })}
          />
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
          <Link to="/">Já tenho conta</Link>
        </Form>
      </Container>
    );
  }
}
