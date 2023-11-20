import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import * as productsActions from "store/products/actions";
import { useNavigate } from "react-router-dom";

export const ProductList = ({
  getProductListRequest,
  productList,
  auth_state,
}) => {
  let navigate = useNavigate();
  useEffect(() => {
    getProductListRequest();
  }, [getProductListRequest]);

  return (
    <>
      {!productList.loading && productList.success && (
        <Table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {productList.data.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <tr>
                    <td>{item.descricao}</td>
                    <td>{item.preco}</td>
                    <td>
                      <button
                        className="btn-blue"
                        onClick={() => {
                          if (auth_state.data.perfil === "PRODUCAO") return;
                          navigate(`/editar-produto/${item.id}`);
                        }}
                        disabled={auth_state.data.perfil === "PRODUCAO"}
                      >
                        Editar
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </Table>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    productList: state.products.list,
    auth_state: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductListRequest: () => {
      dispatch(productsActions.getProductListRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
