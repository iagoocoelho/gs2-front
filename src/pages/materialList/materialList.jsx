import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import * as materialsActions from "store/materials/actions";
import { useNavigate } from "react-router-dom";

export const MaterialList = ({
  getMaterialListRequest,
  materialsList,
  auth_state,
}) => {
  let navigate = useNavigate();
  useEffect(() => {
    getMaterialListRequest();
  }, [getMaterialListRequest]);

  return (
    <>
      {!materialsList.loading && materialsList.success && (
        <Table>
          <thead>
            <tr>
              <th>Fornecedor</th>
              <th>Codigo do Fabricante</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {materialsList.data.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <tr>
                    <td>{item.fornecedor.nome}</td>
                    <td>{item.codigoFabricante}</td>
                    <td>{item.descricao}</td>
                    <td>{item.custo}</td>
                    <td>
                      <button
                        className="btn-blue"
                        onClick={() => {
                          if (auth_state.data.perfil === "PRODUCAO") return;
                          navigate(`/editar-material/${item.id}`);
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
    materialsList: state.materials.list,
    auth_state: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMaterialListRequest: () => {
      dispatch(materialsActions.getMaterialListRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MaterialList);
