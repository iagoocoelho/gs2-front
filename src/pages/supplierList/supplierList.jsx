import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import * as suppliersActions from "store/suppliers/actions";
import { useNavigate } from "react-router-dom";

export const SupplierList = ({
  getSupplierListRequest,
  supplierList,
  auth_state,
}) => {
  let navigate = useNavigate();
  useEffect(() => {
    getSupplierListRequest();
  }, [getSupplierListRequest]);

  return (
    <>
      {!supplierList.loading && supplierList.success && (
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Documento</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {supplierList.data.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <tr>
                    <td>{item.nome}</td>
                    <td>{item.cpfCnpj}</td>
                    <td>{item.email}</td>
                    <td>
                      <button
                        className="btn-blue"
                        onClick={() => {
                          if (auth_state.data.perfil === "PRODUCAO") return;
                          navigate(`/editar-fornecedor/${item.id}`);
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
    supplierList: state.suppliers.list,
    auth_state: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSupplierListRequest: () => {
      dispatch(suppliersActions.getSupplierListRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SupplierList);
