import React from "react";
import { Card, Accordion } from "react-bootstrap";

export const KanbanCardColumn = ({ data }) => {
  console.log(data);

  const CardKanban = ({ props }) => (
    <Card className="my-4" key={props.order_number}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>

        {props.order_list.map((product, i) => (
          <Card.Text className="m-0" key={i}>
            {product.item_name} - Qtd: {product.qtd} {product.unt}
          </Card.Text>
        ))}

        {props.timeline && (
          <Accordion className="mt-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Exibir detalhes do pedido</Accordion.Header>
              {props.timeline.map((item) => {
                return (
                  <Accordion.Body>
                    <p>{item.status}</p>
                    <p>{item.date}</p>
                  </Accordion.Body>
                );
              })}
            </Accordion.Item>
          </Accordion>
        )}
      </Card.Body>
    </Card>
  );

  return data.map((order) => <CardKanban props={order} />);
};

export default KanbanCardColumn;
