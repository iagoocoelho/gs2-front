import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import * as doctorActions from "store/doctor/actions";
import { useNavigate } from "react-router-dom";

export const DoctorList = ({
  getDoctorListRequest,
  doctorList,
  auth_state,
}) => {
  let navigate = useNavigate();
  useEffect(() => {
    getDoctorListRequest();
  }, [getDoctorListRequest]);

  return (
    <>
      {!doctorList.loading && doctorList.success && (
        <Table>
          <thead>
            <tr>
              <th>CRM</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            {doctorList.data.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <tr>
                    <td>{item.crm}</td>
                    <td>{item.nome}</td>
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
    doctorList: state.doctor.list,
    auth_state: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDoctorListRequest: () => {
      dispatch(doctorActions.getDoctorListRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorList);
