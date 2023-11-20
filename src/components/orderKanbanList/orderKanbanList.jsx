import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./orderKanbanList.scss";
import MainContainer from "components/container/mainContainer";
import mock from "./mock.json";
import { ORDER_STATUS } from "utils/variables";
import KanbanCardColumn from "./kanbanCardColumn";

export const OrderKanbanList = () => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      let data = [];

      mock.map((item) => {
        switch (item.order_status) {
          case ORDER_STATUS.PRODUCAO:
            if (
              !!data.filter((item) => item.column === ORDER_STATUS.PRODUCAO)
                .length
            ) {
              return data[ORDER_STATUS.PRODUCAO].data.push(item);
            }

            return data.push({ column: ORDER_STATUS.PRODUCAO, data: [item] });

          case ORDER_STATUS.ENTREGUE:
            if (
              !!data.filter((item) => item.column === ORDER_STATUS.ENTREGUE)
                .length
            ) {
              return data[ORDER_STATUS.ENTREGUE].data.push(item);
            }

            return data.push({ column: ORDER_STATUS.ENTREGUE, data: [item] });

          default:
            if (
              !!data.filter((item) => item.column === ORDER_STATUS.AGUARDANDO)
                .length
            ) {
              return data[ORDER_STATUS.AGUARDANDO].data.push(item);
            }

            return data.push({ column: ORDER_STATUS.AGUARDANDO, data: [item] });
        }
      });

      setColumnArray(data);
      console.log(data);
      isFirstRender.current = false;
    }
  }, []);

  const [columnArray, setColumnArray] = useState([]);

  return (
    <MainContainer>
      <Container fluid>
        <Row>
          {columnArray.map((item, index) => (
            <Col key={index}>
              <KanbanCardColumn data={item.data} />
            </Col>
          ))}
        </Row>
      </Container>
    </MainContainer>
  );
};

export default OrderKanbanList;
