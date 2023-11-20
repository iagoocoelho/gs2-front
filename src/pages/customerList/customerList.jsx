import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import * as customersActions from "store/customers/actions";
import { useNavigate } from "react-router-dom";

export const CustomerList = ({
  getCustomerListRequest,
  customerList,
  auth_state,
}) => {
  let navigate = useNavigate();
  useEffect(() => {
    getCustomerListRequest();
  }, [getCustomerListRequest]);

  return (
    <>
      {!customerList.loading && customerList.success && (
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Documento</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {customerList.data.map((item) => {
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
                          navigate(`/editar-cliente/${item.id}`);
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
    customerList: state.customers.list,
    auth_state: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCustomerListRequest: () => {
      dispatch(customersActions.getCustomerListRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);
