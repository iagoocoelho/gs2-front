import React from "react";
import { Container } from "react-bootstrap";
import "./mainContainer.scss";

export const MainContainer = ({ children, ...props }) => (
  <Container className={props.className}>{children}</Container>
);

export default MainContainer;
