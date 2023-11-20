import React, { useState } from "react";
import { MainContainer } from "components/container/mainContainer";
import { Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import * as authActions from "store/auth/actions";
import "./login.scss";

export const Login = ({ auth_state, authRequest }) => {
  const [data, setData] = useState({
    username: "",
    senha: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!data.senha || !data.username) return;

    authRequest(data);
  };

  return (
    <MainContainer className="login">
      <Row className="col-12 py-4 title text-sm-center">
        <h3 className="p-2">Bem-vindo!</h3>
        <p className="p-2">Acesse o sistema com seu usuário e senha.</p>
      </Row>

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3 justify-content-md-center">
          <Form.Group as={Col} className="mb-3 col-4">
            <Form.Label htmlFor="username">Usuário</Form.Label>
            <Form.Control
              placeholder="Usuário"
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3 justify-content-md-center">
          <Form.Group as={Col} className="mb-3 col-4">
            <Form.Label htmlFor="senha">Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Senha"
              onChange={(e) => setData({ ...data, senha: e.target.value })}
            />
          </Form.Group>
        </Row>

        <Row>
          <Col className="text-sm-center py-4">
            <button variant="primary" className="btn-green" type="submit">
              {auth_state.loading ? "Carregando..." : "Acessar"}
            </button>
          </Col>
        </Row>
      </Form>
    </MainContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    auth_token: state.auth.data?.token,
    auth_state: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authRequest: (data) => {
      dispatch(authActions.authRequest(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
