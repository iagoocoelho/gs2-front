import React, { useEffect, useState, useRef } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { MainContainer } from "components/container/mainContainer";
import { connect } from "react-redux";
import * as materialsActions from "store/materials/actions";
import * as suppliersActions from "store/suppliers/actions";
import { useLocation, useNavigate } from "react-router-dom";
import CurrencyInput from "react-currency-input-field";
import "./formMaterial.scss";
import { getSupplierListRequest } from "store/suppliers/sagas";

export const FormMaterial = ({
  registerState,
  registerMaterialRequest,
  editMaterialRequest,
  getMaterialByIdRequest,
  getMaterialByIdClean,
  editMode,
  material,
  supplierList,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (editMode && isFirstRender.current) {
      isFirstRender.current = false;

      return getMaterialByIdRequest(pathname.split("/editar-material/")[1]);
    }

    getSupplierListRequest();

    return () => {
      getMaterialByIdClean();
    };
  }, [getMaterialByIdRequest, getMaterialByIdClean, editMode, pathname]);

  useEffect(() => {
    if (!material.loading && material.success) setData(material.data);
  }, [material]);

  const [data, setData] = useState({
    idFornecedor: null,
    descricao: "",
    unidade: "",
    codigoFabricante: "",
    custo: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editMode) {
      editMaterialRequest(data.id, data, () => navigate("/listagem-material"));
      return;
    }

    registerMaterialRequest(
      { ...data, custo: +data.custo.replace(",", ".") },
      () => navigate("/listagem-material")
    );
  };

  return (
    <MainContainer>
      <div>
        <div className="col py-4 title">
          <h3 className="p-2">{editMode ? "Editar" : "Cadastrar"} Material</h3>
        </div>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} className="mb-3 col-4 col-sm-4">
              <Form.Label htmlFor="estado">Fornecedor</Form.Label>
              <Form.Select
                id="fornecedor"
                value={data.idFornecedor || data?.fornecedor?.id}
                onChange={(e) => {
                  setData({
                    ...data,
                    idFornecedor: +e.target.value,
                  });
                }}
              >
                <option value="">Selecione o fornecedor</option>
                {supplierList.success &&
                  supplierList?.data.map((fornecedor) => (
                    <option key={fornecedor.id} value={fornecedor.id}>
                      {fornecedor.nome}
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} className="mb-3 col-6 col-sm-6">
              <Form.Label htmlFor="descricao">Descrição</Form.Label>
              <Form.Control
                id="descricao"
                placeholder="Descreva a descrição do material"
                value={data.descricao}
                onChange={(e) =>
                  setData({ ...data, descricao: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3 col-2 col-sm-2">
              <Form.Label htmlFor="unidade">Unidade</Form.Label>
              <Form.Control
                id="unidade"
                placeholder="Ex: Kg, m, cm, m2, ..."
                value={data.unidade}
                onChange={(e) => setData({ ...data, unidade: e.target.value })}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3 col-9 col-sm-9">
              <Form.Label htmlFor="codigoFabricante">
                Nome técnico do Material
              </Form.Label>
              <Form.Control
                id="codigoFabricante"
                placeholder="Descreva o nome que o fornecedor usa para o material"
                value={data.codigoFabricante}
                onChange={(e) =>
                  setData({ ...data, codigoFabricante: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3 col-3 col-sm-3">
              <Form.Label htmlFor="tel">Custo</Form.Label>
              <CurrencyInput
                className="form-control"
                prefix="R$"
                name="custo"
                value={data.custo}
                placeholder="Informe o custo do material"
                decimalsLimit={2}
                onValueChange={(value, name) => {
                  setData({ ...data, custo: value });

                  console.log(value, name);
                }}
                intlConfig={{ locale: "pt-BR", currency: "BRL" }}
              />
            </Form.Group>
          </Row>

          <Row>
            <Col className="text-sm-center py-4">
              <button
                variant="primary"
                className="btn-blue me-4"
                type="button"
                onClick={() => navigate("/listagem-material")}
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
    registerState: state.materials.register,
    material: state.materials.materialById,
    supplierList: state.suppliers.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerMaterialRequest: (data, navigate) => {
      dispatch(materialsActions.registerMaterialRequest(data, navigate));
    },
    editMaterialRequest: (id, data, navigate) => {
      dispatch(materialsActions.editMaterialRequest(id, data, navigate));
    },
    getMaterialByIdRequest: (id) => {
      dispatch(materialsActions.getMaterialByIdRequest(id));
    },
    getMaterialByIdClean: () => {
      dispatch(materialsActions.getMaterialByIdClean());
    },
    getSupplierListRequest: () => {
      dispatch(suppliersActions.getSupplierListRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormMaterial);
