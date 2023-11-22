import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";

export const PrescriptionDetails = ({
  onChangeProduct,
  removeMedicament,
  detalhesRemedio,
  index,
}) => {
  return (
    <Row>
      <Form.Group as={Col} className="mb-3 col-3 col-sm-3">
        <Form.Label htmlFor={`remedio_${index}`}>Remédio</Form.Label>
        <Form.Control
          id={`remedio_${index}`}
          placeholder="Ex: Aspirina"
          value={detalhesRemedio.remedio}
          onChange={(e) => {
            onChangeProduct({ remedio: e.target.value, index });
          }}
        />
      </Form.Group>

      <Form.Group as={Col} className="mb-3 col-2 col-sm-2">
        <Form.Label htmlFor={`dosagem_${index}`}>Dosagem</Form.Label>
        <Form.Control
          id={`dosagem_${index}`}
          value={detalhesRemedio.dosagem}
          placeholder="Ex: 10 ml, 40 Gts, 100 mg, 1 comprimidos, etc..."
          onChange={(e) => {
            onChangeProduct({ dosagem: e.target.value, index });
          }}
        />
      </Form.Group>

      <Form.Group as={Col} className="mb-3 col-3 col-sm-3">
        <Form.Label htmlFor={`frequencia_${index}`}>
          Frequência de uso em <b>Horas</b>
        </Form.Label>
        <Form.Control
          id={`frequencia_${index}`}
          type="number"
          value={detalhesRemedio.frequencia}
          placeholder="Qual a frenquência de uso EM HORAS"
          onChange={(e) => {
            onChangeProduct({ frequencia: e.target.value, index });
          }}
        />
      </Form.Group>

      <Form.Group as={Col} className="mb-3 col-3 col-sm-3">
        <Form.Label htmlFor={`prazo_${index}`}>Prazo de uso</Form.Label>
        <Form.Control
          id={`prazo_${index}`}
          value={detalhesRemedio.prazo}
          placeholder="Ex: 15 dias, Caso dor ou febre, Até acabar o frasco, etc..."
          onChange={(e) => {
            onChangeProduct({ prazo: e.target.value, index });
          }}
        />
      </Form.Group>

      <Col className="col-1 col-sm-1 align-self-center">
        <button
          type="button"
          onClick={() => removeMedicament(detalhesRemedio)}
          className="remove"
          ria-label="Informações do pedido"
        >
          <AiFillCloseCircle size={"30px"} />
        </button>
      </Col>
    </Row>
  );
};

export default PrescriptionDetails;
