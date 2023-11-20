import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";
import { AiFillCloseCircle } from "react-icons/ai";
import "./formProduct.scss";

export const MaterialComponent = ({
  material,
  materialList,
  onChangeMaterial,
  removeMaterial,
  index,
}) => {
  return (
    <Row>
      <Form.Group as={Col} className="mb-3 col-9 col-sm-9">
        <Form.Label htmlFor="estado">Material {index + 1}</Form.Label>
        <Form.Select
          id="material"
          value={material.idMaterial}
          onChange={(e) => {
            onChangeMaterial({ idMaterial: +e.target.value, index });
          }}
        >
          <option value="">Selecione o material...</option>
          {materialList.success &&
            materialList?.data.map((material) => (
              <option key={material.id} value={material.id}>
                {material.descricao}
              </option>
            ))}
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col} className="mb-3 col-2 col-sm-2">
        <Form.Label htmlFor="tel">Quantidade do material</Form.Label>
        <CurrencyInput
          className="form-control"
          name="quantidade"
          placeholder="Informe a quantidade"
          value={material.quantidade}
          decimalsLimit={2}
          onValueChange={(value, name) => {
            onChangeMaterial({ quantidade: value, index });
          }}
        />
      </Form.Group>

      <Col className="col-1 col-sm-1 align-self-center">
        <button
          type="button"
          onClick={() => removeMaterial({ index })}
          className="remove"
          ria-label="Informações do pedido"
        >
          <AiFillCloseCircle size={"30px"} />
        </button>
      </Col>
    </Row>
  );
};

export default MaterialComponent;
