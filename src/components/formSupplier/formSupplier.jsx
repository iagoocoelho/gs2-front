import React, { useEffect, useState, useRef } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { MainContainer } from "components/container/mainContainer";
import { connect } from "react-redux";
import * as suppliersActions from "store/suppliers/actions";
import { UF } from "utils/variables";
import { useLocation, useNavigate } from "react-router-dom";
import "./formSupplier.scss";

export const FormSupplier = ({
  registerState,
  deleteSupplierRequest,
  registerSupplierRequest,
  editSupplierRequest,
  getSupplierByIdRequest,
  getSupplierByIdClean,
  editMode,
  supplier,
  deleteState,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (editMode && isFirstRender.current) {
      isFirstRender.current = false;
      return getSupplierByIdRequest(pathname.split("/editar-fornecedor/")[1]);
    }

    return () => {
      getSupplierByIdClean();
    };
  }, [getSupplierByIdRequest, getSupplierByIdClean, editMode, pathname]);

  useEffect(() => {
    if (!supplier.loading && supplier.success) setData(supplier.data);
  }, [supplier]);

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
      editSupplierRequest(data.id, data, () =>
        navigate("/listagem-fornecedor")
      );
      return;
    }

    registerSupplierRequest(data, () => navigate("/listagem-fornecedor"));
  };

  // const handleDelete = (event) => {
  //   event.preventDefault();

  //   deleteSupplierRequest(data.id, () => navigate("/listagem-fornecedor"));
  // };

  return (
    <MainContainer>
      <div>
        <div className="col py-4 title">
          <h3 className="p-2">
            {editMode ? "Editar" : "Cadastrar"} Fornecedor
          </h3>
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
                onClick={() => navigate("/listagem-fornecedor")}
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
    registerState: state.suppliers.register,
    deleteState: state.suppliers.delete,
    supplier: state.suppliers.supplierById,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerSupplierRequest: (data, navigate) => {
      dispatch(suppliersActions.registerSupplierRequest(data, navigate));
    },
    editSupplierRequest: (id, data, navigate) => {
      dispatch(suppliersActions.editSupplierRequest(id, data, navigate));
    },
    deleteSupplierRequest: (id, navigate) => {
      dispatch(suppliersActions.deleteSupplierRequest(id, navigate));
    },
    getSupplierByIdRequest: (id) => {
      dispatch(suppliersActions.getSupplierByIdRequest(id));
    },
    getSupplierByIdClean: () => {
      dispatch(suppliersActions.getSupplierByIdClean());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSupplier);
