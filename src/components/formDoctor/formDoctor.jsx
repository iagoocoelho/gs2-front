import React, { useEffect, useState, useRef } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { MainContainer } from "components/container/mainContainer";
import { connect } from "react-redux";
import * as doctorActions from "store/doctor/actions";
import { useLocation, useNavigate } from "react-router-dom";
import "./formDoctor.scss";

export const FormDoctor = ({
  registerState,
  registerDoctorRequest,
  editDoctorRequest,
  getDoctorByIdRequest,
  getDoctorByIdClean,
  editMode,
  doctor,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (editMode && isFirstRender.current) {
      isFirstRender.current = false;
      return getDoctorByIdRequest(pathname.split("/editar-fornecedor/")[1]);
    }

    return () => {
      getDoctorByIdClean();
    };
  }, [getDoctorByIdRequest, getDoctorByIdClean, editMode, pathname]);

  useEffect(() => {
    if (!doctor.loading && doctor.success) setData(doctor.data);
  }, [doctor]);

  const [data, setData] = useState({
    id: null,
    nome: "",
    crm: "",
    area_atuacao: "",
    dt_nascimento: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editMode) {
      editDoctorRequest(data.id, data, () => navigate("/listagem-medico"));
      return;
    }

    registerDoctorRequest(data, () => navigate("/listagem-medico"));
  };

  return (
    <MainContainer>
      <div>
        <div className="col py-4 title">
          <h3 className="p-2">{editMode ? "Editar" : "Cadastrar"} Médico</h3>
        </div>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} className="mb-3 col-8 col-sm-8">
              <Form.Label htmlFor="name">Nome do Doutor</Form.Label>
              <Form.Control
                id="name"
                placeholder="Nome"
                value={data.nome}
                onChange={(e) => setData({ ...data, nome: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3 col-4 col-sm-4">
              <Form.Label htmlFor="crm">CRM</Form.Label>
              <Form.Control
                id="crm"
                placeholder="123456-XX"
                value={data.crm}
                onChange={(e) => setData({ ...data, crm: e.target.value })}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3 col-4 col-sm-4">
              <Form.Label htmlFor="dt_nascimento">Data de Nascimento</Form.Label>
              <Form.Control
                id="dt_nascimento"
                placeholder="dd/mm/aaaa"
                value={data.dt_nascimento}
                onChange={(e) =>
                  setData({ ...data, dt_nascimento: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3 col-4 col-sm-4">
              <Form.Label htmlFor="area_atuacao">Área de Atuação</Form.Label>
              <Form.Control
                id="area_atuacao"
                value={data.area_atuacao}
                onChange={(e) =>
                  setData({ ...data, area_atuacao: e.target.value })
                }
              />
            </Form.Group>
          </Row>

          <Row>
            <Col className="text-sm-end py-4">
              <button
                variant="primary"
                className="btn-blue me-4"
                type="button"
                onClick={() => navigate("/listagem-medico")}
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
    registerState: state.doctor.register,
    doctor: state.doctor.doctorById,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerDoctorRequest: (data, navigate) => {
      dispatch(doctorActions.registerDoctorRequest(data, navigate));
    },
    editDoctorRequest: (id, data, navigate) => {
      dispatch(doctorActions.editDoctorRequest(id, data, navigate));
    },
    getDoctorByIdRequest: (id) => {
      dispatch(doctorActions.getDoctorByIdRequest(id));
    },
    getDoctorByIdClean: () => {
      dispatch(doctorActions.getDoctorByIdClean());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormDoctor);
