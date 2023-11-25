import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import "./header.scss";
import { PermissionsByProfile } from "utils/variables";
import * as authActions from "store/auth/actions";

const privateHeaders = [
  {
    lista_medico: (
      <Nav.Link key="lista_medico" href="/listagem-medico">
        Listagem de Médicos
      </Nav.Link>
    ),
  },
  {
    cadastra_medico: (
      <Nav.Link key="cadastra_medico" href="/cadastro-medico">
        Cadastrar Médico
      </Nav.Link>
    ),
  },
];


export const Header = ({ auth_state, authLogout }) => {
  const { pathname } = useLocation();

  const allowedNavBars = privateHeaders
    .map((route) => {
      let hasPerm = PermissionsByProfile[auth_state.data.perfil].find((x) => {
        return Object.keys(route).pop() === x;
      });

      if (hasPerm) return route[Object.keys(route)];

      return false;
    })
    .filter((allowed) => allowed);

  return (
    <>
      <Navbar
        expand="lg"
        className="shadow-sm p-0 navbar navbar-expand-lg navbar-light d-flex flex-column"
      >
        <div className="p-4 w-100">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="text-center">
            <Nav activeKey={pathname} className="w-100 justify-content-end align-items-center">
              {allowedNavBars.map(x => x)}

              <div className="btn-container">
                <Button
                  onClick={() => {
                    authLogout()
                  }}
                >
                  Deslogar
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth_state: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authLogout: () => {
      dispatch(authActions.authLogout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
