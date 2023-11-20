import React, { useEffect, useState, useRef } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { MainContainer } from "components/container/mainContainer";
import { connect } from "react-redux";
import * as customersActions from "store/customers/actions";
import { UF } from "utils/variables";
import { useLocation, useNavigate } from "react-router-dom";
import "./formCustomer.scss";

export const FormCustomer = ({
  registerState,
  deleteCustomerRequest,
  registerCustomerRequest,
  editCustomerRequest,
  getCustomerByIdRequest,
  getCustomerByIdClean,
  editMode,
  customer,
  deleteState,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (editMode && isFirstRender.current) {
      isFirstRender.current = false;
      return getCustomerByIdRequest(pathname.split("/editar-cliente/")[1]);
    }

    return () => {
      getCustomerByIdClean();
    };
  }, [getCustomerByIdRequest, getCustomerByIdClean, editMode, pathname]);

  useEffect(() => {
    if (!customer.loading && customer.success) setData(customer.data);
  }, [customer]);

  const [data, setData] = useState({
    id: null,
    nome: "",
    cpfCnpj: "",
    email: "",
    telefone1: {
      tipo: "COMERCIAL",
      numero: "",
    },
    telefone2: {
      tipo: "CELULAR",
      numero: "",
    },
    endereco: {
      logradouro: "",
      numero: "",
      bairro: "",
      estado: "",
      cep: "",
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editMode) {
      editCustomerRequest(data.id, data, () => navigate("/listagem-cliente"));
      return;
    }

    registerCustomerRequest(data, () => navigate("/listagem-cliente"));
  };

  // const handleDelete = (event) => {
  //   event.preventDefault();

  //   deleteCustomerRequest(data.id, () => navigate("/listagem-cliente"));
  // };

  return (
    <MainContainer>
      <div>
        <div className="col py-4 title">
          <h3 className="p-2">{editMode ? "Editar" : "Cadastrar"} Cliente</h3>
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
                value={data.cpfCnpj}
                onChange={(e) => setData({ ...data, cpfCnpj: e.target.value })}
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
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3 col-4 col-sm-4">
              <Form.Label htmlFor="tel">Telefone Comercial</Form.Label>
              <Form.Control
                id="tel"
                placeholder="Telefone Comercial"
                type="number"
                value={data?.telefone1?.numero}
                onChange={(e) => {
                  setData({
                    ...data,
                    telefone1: { ...data.telefone1, numero: e.target.value },
                  });
                }}
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3 col-4 col-sm-4">
              <Form.Label htmlFor="cel">Celular</Form.Label>
              <Form.Control
                id="cel"
                placeholder="Celular"
                value={data?.telefone2?.numero}
                onChange={(e) => {
                  setData({
                    ...data,
                    telefone2: { ...data.telefone2, numero: e.target.value },
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
                value={data.endereco.logradouro}
                onChange={(e) =>
                  setData({
                    ...data,
                    endereco: {
                      ...data.endereco,
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
                value={data.endereco.bairro}
                onChange={(e) =>
                  setData({
                    ...data,
                    endereco: {
                      ...data.endereco,
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
                value={data.endereco.numero}
                type="number"
                onChange={(e) =>
                  setData({
                    ...data,
                    endereco: {
                      ...data.endereco,
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
                value={
                  UF.find((x) => x.sigla === data.endereco.estado)?.sigla || ""
                }
                onChange={(e) => {
                  setData({
                    ...data,
                    endereco: {
                      ...data.endereco,
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
                value={data.endereco.cep}
                onChange={(e) => {
                  if (e.target.value.length > 8) return;

                  setData({
                    ...data,
                    endereco: {
                      ...data.endereco,
                      cep: e.target.value,
                    },
                  });
                }}
              />
            </Form.Group>
          </Row>

          <Row>
            <Col className="text-sm-center py-4">
              <button
                variant="primary"
                className="btn-blue me-4"
                type="button"
                onClick={() => navigate("/listagem-cliente")}
              >
                Voltar
              </button>

              <button
                variant="primary"
                className="btn-green"
                type="submit"
                disabled={registerState.loading}
              >
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
    registerState: state.customers.register,
    deleteState: state.customers.delete,
    customer: state.customers.customerById,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerCustomerRequest: (data, navigate) => {
      dispatch(customersActions.registerCustomerRequest(data, navigate));
    },
    editCustomerRequest: (id, data, navigate) => {
      dispatch(customersActions.editCustomerRequest(id, data, navigate));
    },
    deleteCustomerRequest: (id, navigate) => {
      dispatch(customersActions.deleteCustomerRequest(id, navigate));
    },
    getCustomerByIdRequest: (id) => {
      dispatch(customersActions.getCustomerByIdRequest(id));
    },
    getCustomerByIdClean: () => {
      dispatch(customersActions.getCustomerByIdClean());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormCustomer);
