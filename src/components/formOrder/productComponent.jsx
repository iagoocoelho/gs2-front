import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";
import { AiFillCloseCircle } from "react-icons/ai";

export const ProductComponent = ({
  product,
  productList,
  onChangeProduct,
  removeProduct,
  index,
  viewMode,
}) => {
  return (
    <Row>
      <Form.Group as={Col} className="mb-3 col-9 col-sm-9">
        <Form.Label htmlFor="estado">Produto {index + 1}</Form.Label>
        <Form.Select
          id="product"
          value={product.idProduto || product?.produto?.id}
          onChange={(e) => {
            onChangeProduct({ idProduto: +e.target.value, index });
          }}
          disabled={viewMode}
        >
          <option value="">Selecione o produto...</option>
          {productList.success &&
            productList?.data.map((product) => (
              <option key={product.id} value={product.id}>
                {product.descricao}
              </option>
            ))}
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col} className="mb-3 col-2 col-sm-2">
        <Form.Label htmlFor="tel">Quantidade do produto</Form.Label>
        <CurrencyInput
          className="form-control"
          name="quantidade"
          placeholder="Informe a quantidade"
          value={product.quantidade}
          decimalsLimit={2}
          onValueChange={(value, name) => {
            onChangeProduct({ quantidade: value, index });
          }}
          disabled={viewMode}
        />
      </Form.Group>

      <Col className="col-1 col-sm-1 align-self-center">
        <button
          type="button"
          onClick={() => removeProduct({ index })}
          className="remove"
          ria-label="Informações do pedido"
          disabled={viewMode}
        >
          <AiFillCloseCircle size={"30px"} />
        </button>
      </Col>
    </Row>
  );
};

export default ProductComponent;
