import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Table, Badge } from "react-bootstrap";
import * as ordersActions from "store/orders/actions";
import { useNavigate } from "react-router-dom";
import { OrderStatus, handleStatusOrderColor } from "utils/variables";
import "./orderList.scss";

export const OrderList = ({ getOrderListRequest, ordersList, auth_state }) => {
  let navigate = useNavigate();
  useEffect(() => {
    getOrderListRequest();
  }, [getOrderListRequest]);

  return (
    <>
      {!ordersList.loading && ordersList.success && (
        <Table className="order-list">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Data de Entrega</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {ordersList.data.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <tr>
                    <td>{item.clienteFornecedor.nome}</td>
                    <td>{item.dataEntrega}</td>
                    <td>
                      <Badge
                        className="status"
                        text={`${
                          item.status === "AGUARDANDO_PRODUCAO" ? "dark" : ""
                        }`}
                        bg={`${handleStatusOrderColor(item.status)}`}
                      >
                        {OrderStatus[item.status]}
                      </Badge>
                    </td>
                    <td>
                      <button
                        className="btn-blue"
                        onClick={() =>
                          navigate(`/visualizar-pedido/${item.id}`)
                        }
                      >
                        Detalhes
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
    ordersList: state.orders.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOrderListRequest: () => {
      dispatch(ordersActions.getOrderListRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
