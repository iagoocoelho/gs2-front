import React, { useEffect, useState, useRef } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { MainContainer } from "components/container/mainContainer";
import { connect } from "react-redux";
import * as productsActions from "store/products/actions";
import { useLocation, useNavigate } from "react-router-dom";
import CurrencyInput from "react-currency-input-field";
import MaterialComponent from "./materialComponent";
import * as materialsActions from "store/materials/actions";
import "./formProduct.scss";

export const FormProduct = ({
  registerState,
  registerProductRequest,
  editProductRequest,
  getProductByIdRequest,
  getProductByIdClean,
  getMaterialListRequest,
  editMode,
  product,
  materialsList,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (editMode && isFirstRender.current) {
      isFirstRender.current = false;

      return getProductByIdRequest(pathname.split("/editar-produto/")[1]);
    }

    getMaterialListRequest();

    return () => {
      getProductByIdClean();
    };
  }, [
    getProductByIdRequest,
    getProductByIdClean,
    editMode,
    pathname,
    getMaterialListRequest,
  ]);

  useEffect(() => {
    if (!product.loading && product.success) {
      let newDetalhes = product.data.detalhes.map((x) => {
        return {
          idMaterial: x.material.id,
          quantidade: x.quantidade,
        };
      });


      setData({...product.data, detalhes: newDetalhes});
    }
  }, [product]);

  const [data, setData] = useState({
    descricao: "",
    preco: null,
    detalhes: [
      {
        idMaterial: null,
        quantidade: "",
      },
    ],
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editMode) {
      editProductRequest(data.id, data, () => navigate("/listagem-produto"));
      return;
    }

    let formatData = {
      ...data,
      preco: +data.preco.replace(",", "."),
      detalhes: data.detalhes.map((detalhe) => {
        return {
          ...detalhe,
          quantidade: +detalhe.quantidade.replace(",", "."),
        };
      }),
    };

    registerProductRequest(formatData, () => navigate("/listagem-produto"));
  };

  const newMaterial = () => {
    let newList = data.detalhes;

    newList.push({
      idMaterial: null,
      quantidade: "",
    });

    setData({ ...data, detalhes: newList });
  };

  const removeMaterial = ({ index }) => {
    if (data.detalhes.length === 1) return;

    let newList = data.detalhes.filter((detalhe, i) => i !== index);

    setData({ ...data, detalhes: newList });
  };

  const onChangeMaterial = ({ idMaterial, quantidade, index }) => {
    let newData = data.detalhes.map((detalhe, i) => {
      if (i === index) {
        return {
          idMaterial: !!idMaterial ? idMaterial : detalhe.idMaterial,
          quantidade: !!quantidade ? quantidade : detalhe.quantidade,
        };
      }

      return { ...detalhe };
    });

    setData({ ...data, detalhes: newData });
  };

  return (
    <MainContainer>
      <div className="form-product">
        <div className="col py-4 title">
          <h3 className="p-2">{editMode ? "Editar" : "Cadastrar"} Produto</h3>
        </div>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} className="mb-3 col-9 col-sm-9">
              <Form.Label htmlFor="descricao">Descrição</Form.Label>
              <Form.Control
                id="descricao"
                placeholder="Descreva a descrição do produto"
                value={data.descricao}
                onChange={(e) =>
                  setData({ ...data, descricao: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3 col-3 col-sm-3">
              <Form.Label htmlFor="tel">Preço</Form.Label>
              <CurrencyInput
                className="form-control"
                prefix="R$"
                name="custo"
                placeholder="Informe o preço do produto"
                decimalsLimit={2}
                value={data.preco}
                onValueChange={(value, name) => {
                  setData({ ...data, preco: value });
                }}
                intlConfig={{ locale: "pt-BR", currency: "BRL" }}
              />
            </Form.Group>
          </Row>

          {data.detalhes.map((material, i) => {
            return (
              <MaterialComponent
                index={i}
                materialList={materialsList}
                material={material}
                onChangeMaterial={onChangeMaterial}
                removeMaterial={removeMaterial}
              />
            );
          })}

          <button
            variant="primary"
            className="btn-blue me-4"
            type="button"
            onClick={newMaterial}
          >
            Adicionar Material
          </button>

          <Row>
            <Col className="text-sm-center py-4">
              <button
                variant="primary"
                className="btn-blue me-4"
                type="button"
                onClick={() => navigate("/listagem-produto")}
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
    registerState: state.products.register,
    product: state.products.productById,
    materialsList: state.materials.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerProductRequest: (data, navigate) => {
      dispatch(productsActions.registerProductRequest(data, navigate));
    },
    editProductRequest: (id, data, navigate) => {
      dispatch(productsActions.editProductRequest(id, data, navigate));
    },
    getProductByIdRequest: (id) => {
      dispatch(productsActions.getProductByIdRequest(id));
    },
    getProductByIdClean: () => {
      dispatch(productsActions.getProductByIdClean());
    },
    getMaterialListRequest: () => {
      dispatch(materialsActions.getMaterialListRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormProduct);
