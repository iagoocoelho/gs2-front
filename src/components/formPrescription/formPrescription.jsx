import React, { useEffect, useState } from "react";
import { Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { MainContainer } from "components/container/mainContainer";
import { connect } from "react-redux";
import * as patientActions from "store/patient/actions";
import { useLocation, useNavigate } from "react-router-dom";
import { Typeahead } from "react-bootstrap-typeahead";
import PrescriptionDetails from "./prescriptionDetails";
import "./formPrescription.scss";

export const FormPrescription = ({
  registerState,
  registerPatientRequest,
  getPatientByIdRequest,
  getPatientByIdClean,
  editMode,
  patient,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [hasConfirmedUserData, setHasConfirmedUserData] = useState(false);
  const [singleSelections, setSingleSelections] = useState([]);

  useEffect(() => {
    return () => {
      getPatientByIdClean();
    };
  }, [getPatientByIdRequest, getPatientByIdClean, editMode, pathname]);

  useEffect(() => {
    if (!patient.loading && patient.success) setData(patient.data);
  }, [patient]);

  const [data, setData] = useState({
    id: null,
    nome: "",
    cpf: "",
    dt_nascimento: "",
    peso: null,
    altura: null,
    sexo: "",
    informacoesAdicionais: "",
    detalhe_receita: [
      {
        remedio: "",
        dosagem: "",
        frequencia: null,
        prazo: "",
      },
    ],
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    registerPatientRequest(data, () => navigate("/listagem-paciente"));
  };

  const handleChangePatient = (event) => {
    setSingleSelections(event);
    setHasConfirmedUserData(false);
  };

  const handleConfirmUser = (event) => {
    event.preventDefault();

    setHasConfirmedUserData(true);

    // registerPatientRequest(data, () => navigate("/listagem-paciente"));
  };

  const onChangeProduct = ({ remedio, dosagem, frequencia, prazo, index }) => {
    let newData = data.detalhe_receita.map((detalhe_remedio, i) => {
      if (i === index) {
        return {
          remedio: !!remedio ? remedio : detalhe_remedio.remedio,
          dosagem: !!dosagem ? dosagem : detalhe_remedio.dosagem,
          frequencia: !!frequencia ? frequencia : detalhe_remedio.frequencia,
          prazo: !!prazo ? prazo : detalhe_remedio.prazo,
        };
      }

      return { ...detalhe_remedio };
    });

    setData({ ...data, detalhe_receita: newData });
  };

  const removeMedicament = (detalhesRemedio) => {
    // debugger;
    if (data.detalhe_receita.length === 1) return;

    let newList = data.detalhe_receita.filter(
      (d, i) => d.remedio !== detalhesRemedio.remedio
    );

    setData({ ...data, detalhe_receita: newList });
  };

  const newMedicament = () => {
    let newList = data.detalhe_receita;

    newList.push({
      remedio: "",
      dosagem: "",
      frequencia: null,
      prazo: "",
    });

    setData({ ...data, detalhe_receita: newList });
  };

  return (
    <MainContainer className="form-prescription">
      <div>
        <div className="col py-4 title">
          <h3 className="p-2">Receitar Paciente</h3>
        </div>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} className="mb-3 col-8 col-sm-8">
              <Form.Label>Nome do Paciente</Form.Label>
              <Typeahead
                labelKey="name"
                id="name"
                onChange={handleChangePatient}
                options={[
                  "Brooks",
                  "Rachel",
                  "Edwards",
                  "Christopher",
                  "Perez",
                  "Thomas",
                  "Baker",
                  "Sara",
                  "Moore",
                  "Chris",
                  "Bailey",
                  "Roger",
                  "Johnson",
                  "Marilyn",
                  "Thompson",
                  "Anthony",
                  "Evans",
                  "Julie",
                  "Hall",
                  "Paula",
                  "Phillips",
                  "Annie",
                  "Hernandez",
                  "Dorothy",
                  "Murphy",
                  "Alice",
                  "Howard",
                ]}
                placeholder="Busque pelo paciente, caso não exista ele será cadastrado."
                selected={singleSelections}
              />
            </Form.Group>

            {!!singleSelections.length && (
              <>
                <Form.Group as={Col} className="mb-3 col-4 col-sm-4">
                  <Form.Label htmlFor="cpf">CPF</Form.Label>
                  <Form.Control
                    id="cpf"
                    placeholder="Informe seu CPF"
                    disabled
                    value={data.cpf}
                    onChange={(e) => setData({ ...data, cpf: e.target.value })}
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-4 col-sm-4">
                  <Form.Label htmlFor="dt_nascimento">
                    Data de Nascimento
                  </Form.Label>
                  <Form.Control
                    id="dt_nascimento"
                    placeholder="dd/mm/aaaa"
                    disabled
                    value={data.dt_nascimento}
                    onChange={(e) =>
                      setData({ ...data, dt_nascimento: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-2 col-sm-2">
                  <Form.Label htmlFor="peso">Peso</Form.Label>
                  <Form.Control
                    id="peso"
                    type="number"
                    disabled
                    placeholder="Informe seu Peso Aproximado"
                    value={data.peso}
                    onChange={(e) => setData({ ...data, peso: e.target.value })}
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-2 col-sm-2">
                  <Form.Label htmlFor="altura">Altura</Form.Label>
                  <Form.Control
                    id="altura"
                    type="number"
                    disabled
                    placeholder="Informe sua Altura Aproximada"
                    value={data.altura}
                    onChange={(e) =>
                      setData({ ...data, altura: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-4 col-sm-4">
                  <Form.Label htmlFor="sexo">Sexo</Form.Label>
                  <Form.Control
                    id="sexo"
                    disabled
                    placeholder="Informe seu Sexo"
                    value={data.sexo}
                    onChange={(e) => setData({ ...data, sexo: e.target.value })}
                  />
                </Form.Group>

                <Col className="text-sm-end py-4 col-12">
                  <button
                    variant="primary"
                    className="btn-green"
                    onClick={handleConfirmUser}
                    disabled={hasConfirmedUserData}
                  >
                    {hasConfirmedUserData
                      ? "Dados confirmados!"
                      : "Confirmar dados do paciente"}
                  </button>
                </Col>
              </>
            )}
          </Row>

          {/* Detalhes da Receita */}
          {hasConfirmedUserData && (
            <>
              {data.detalhe_receita.map((remedio, i) => {
                return (
                  <PrescriptionDetails
                    index={i}
                    detalhesRemedio={remedio}
                    onChangeProduct={onChangeProduct}
                    removeMedicament={removeMedicament}
                  />
                );
              })}

              <button
                variant="primary"
                className="btn-blue me-4 mb-4"
                type="button"
                onClick={newMedicament}
              >
                Adicionar Medicamento
              </button>

              <Row>
                <Form.Group as={Col} className="mb-3 col-12 col-sm-12">
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Informações adicionais"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Informações adicionais ao paciente"
                      style={{ height: "100px" }}
                      value={data.informacoesAdicionais}
                      onChange={(e) => {
                        setData({
                          ...data,
                          informacoesAdicionais: e.target.value,
                        });
                      }}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Row>
            </>
          )}

          <Row>
            <Col className="text-sm-end py-4">
              <button
                variant="primary"
                className="btn-blue me-4"
                type="button"
                onClick={() => navigate("/listagem-paciente")}
              >
                Voltar
              </button>

              <button
                variant="primary"
                className="btn-green"
                type="submit"
                disabled={registerState.loading || !hasConfirmedUserData}
              >
                {registerState.loading ? "Enviando..." : "Enviar Receita"}
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
    registerState: state.patient.register,
    deleteState: state.patient.delete,
    patient: state.patient.patientById,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerPatientRequest: (data, navigate) => {
      dispatch(patientActions.registerPatientRequest(data, navigate));
    },
    getPatientByIdRequest: (id) => {
      dispatch(patientActions.getPatientByIdRequest(id));
    },
    getPatientByIdClean: () => {
      dispatch(patientActions.getPatientByIdClean());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormPrescription);
