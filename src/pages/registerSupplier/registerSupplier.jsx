import React, { useEffect, useMemo, useState } from "react";
import { Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { MainContainer } from "components/container/mainContainer";
import { connect } from "react-redux";
import * as suppliersActions from "store/suppliers/actions";
import { UF } from "utils/variables";
import "./registerSupplier.scss";

export const RegisterSupplier = ({
  registerState,
  registerSupplierRequest,
}) => {
  const [data, setData] = useState({
    nome: "João",
    documento: "12345678910",
    emails: "luiz@luiz.com.br",
    telefones: [
      {
        tipo: "CELULAR",
        numero: "11952366025",
      },
      {
        tipo: "COMERCIAL",
        numero: "1127012000",
      },
    ],
    enderecos: {
      logradouro: "Rua asçljlçksalçjskfad",
      numero: "229",
      bairro: "jardim das flores",
      estado: "SP",
      cep: "18207006",
    },
  });

  const handleSubmit = (event) => {
    console.log(data);
    event.preventDefault();

    registerSupplierRequest(data);
  };

  return (
    <MainContainer>
      <div>
        <div className="col py-4 title">
          <h3 className="p-2">Cadastrar Fornecedor</h3>
        </div>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} className="mb-3 col-8 col-sm-8">
              <Form.Label htmlFor="name">Nome</Form.Label>
              <Form.Control
                id="name"
                placeholder="Nome"
                value={data.nome}
                onChange={(e) => setData({ ...data, nome: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3 col-4 col-sm-4">
              <Form.Label htmlFor="doc">Documento</Form.Label>
              <Form.Control
                id="doc"
                placeholder="Documento"
                value={data.documento}
                onChange={(e) =>
                  setData({ ...data, documento: e.target.value })
                }
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3 col-4 col-sm-4">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                placeholder="Email"
                type="email"
                value={data.emails}
                onChange={(e) => setData({ ...data, emails: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3 col-4 col-sm-4">
              <Form.Label htmlFor="tel">Telefone Comercial</Form.Label>
              <Form.Control
                id="tel"
                placeholder="Telefone Comercial"
                type="number"
                value={
                  data.telefones.find((item) => item.tipo === "COMERCIAL")
                    .numero
                }
                onChange={(e) => {
                  let newData = data.telefones.map((tel) => {
                    if (tel.tipo === "COMERCIAL") {
                      return { ...tel, numero: e.target.value };
                    }
                    return tel;
                  });

                  setData({
                    ...data,
                    telefones: newData,
                  });
                }}
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3 col-4 col-sm-4">
              <Form.Label htmlFor="cel">Celular</Form.Label>
              <Form.Control
                id="cel"
                placeholder="Celular"
                value={
                  data.telefones.find((item) => item.tipo === "CELULAR").numero
                }
                onChange={(e) => {
                  let newData = data.telefones.map((tel) => {
                    if (tel.tipo === "CELULAR") {
                      return { ...tel, numero: e.target.value };
                    }
                    return tel;
                  });

                  setData({
                    ...data,
                    telefones: newData,
                  });
                }}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3 col-4 col-sm-4">
              <Form.Label htmlFor="logradouro">Logradouro</Form.Label>
              <Form.Control
                id="logradouro"
                placeholder="Logradouro"
                value={data.enderecos.logradouro}
                onChange={(e) =>
                  setData({
                    ...data,
                    enderecos: {
                      ...data.enderecos,
                      logradouro: e.target.value,
                    },
                  })
                }
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3 col-2 col-sm-2">
              <Form.Label htmlFor="bairro">Bairro</Form.Label>
              <Form.Control
                id="bairro"
                placeholder="Bairro"
                value={data.enderecos.bairro}
                onChange={(e) =>
                  setData({
                    ...data,
                    enderecos: {
                      ...data.enderecos,
                      bairro: e.target.value,
                    },
                  })
                }
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3 col-2 col-sm-2">
              <Form.Label htmlFor="numero">Número</Form.Label>
              <Form.Control
                placeholder="Número"
                id="numero"
                value={data.enderecos.numero}
                type="number"
                onChange={(e) =>
                  setData({
                    ...data,
                    enderecos: {
                      ...data.enderecos,
                      numero: e.target.value,
                    },
                  })
                }
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3 col-2 col-sm-2">
              <Form.Label htmlFor="estado">Estado</Form.Label>
              <Form.Select
                id="estado"
                onChange={(e) => {
                  setData({
                    ...data,
                    enderecos: {
                      ...data.enderecos,
                      estado: e.target.value,
                    },
                  });
                }}
              >
                <option value="">Selecione o estado</option>
                {UF.map((uf) => (
                  <option key={uf.sigla} value={uf.sigla}>
                    {uf.nome}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} className="mb-3 col-2 col-sm-2">
              <Form.Label htmlFor="cep">CEP</Form.Label>
              <Form.Control
                id="cep"
                type="number"
                placeholder="CEP"
                value={data.enderecos.cep}
                onChange={(e) => {
                  if (e.target.value.length > 8) return;

                  setData({
                    ...data,
                    enderecos: {
                      ...data.enderecos,
                      cep: e.target.value,
                    },
                  });
                }}
              />
            </Form.Group>
          </Row>

          <Row>
            <Col className="text-sm-center py-4">
              <button variant="primary" className="btn-red mx-4" type="button">
                Cancelar
              </button>

              <button variant="primary" className="btn-green" type="submit">
                {registerState.loading ? "Enviando..." : "Enviar"}
              </button>
            </Col>
          </Row>
        </Form>
      </div>
    </MainContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    registerState: state.suppliers.register,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerSupplierRequest: (data) => {
      dispatch(suppliersActions.registerSupplierRequest(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterSupplier);
