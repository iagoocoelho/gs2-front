import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import "./header.scss";
import { PermissionsByProfile } from "utils/variables";
import * as authActions from "store/auth/actions";

const privateHeaders = [
  {
    lista_fornecedor: (
      <Nav.Link key="lista_fornecedor" href="/listagem-fornecedor">
        Listagem de Fornecedores
      </Nav.Link>
    ),
  },
  {
    edit_fornecedor: (
      <Nav.Link key="edit_fornecedor" href="/cadastro-fornecedor">
        Cadastrar Fornecedor
      </Nav.Link>
    ),
  },
  {
    lista_cliente: (
      <Nav.Link key="lista_cliente" href="/listagem-cliente">
        Listagem de Clientes
      </Nav.Link>
    ),
  },
  {
    edit_cliente: (
      <Nav.Link key="edit_cliente" href="/cadastro-cliente">
        Cadastrar Clientes
      </Nav.Link>
    ),
  },
  {
    lista_material: (
      <Nav.Link key="lista_material" href="/listagem-material">
        Listagem de Materiais
      </Nav.Link>
    ),
  },
  {
    edit_material: (
      <Nav.Link key="edit_material" href="/cadastro-material">
        Cadastrar Material
      </Nav.Link>
    ),
  },
  {
    lista_produto: (
      <Nav.Link key="lista_produto" href="/listagem-produto">
        Listagem de Produtos
      </Nav.Link>
    ),
  },
  {
    edit_produto: (
      <Nav.Link key="edit_produto" href="/cadastro-produto">
        Cadastrar Produto
      </Nav.Link>
    ),
  },
  {
    lista_pedido: (
      <Nav.Link key="lista_pedido" href="/lista-pedidos">
        Listagem de Pedidos
      </Nav.Link>
    ),
  },
  {
    edit_pedido: (
      <Nav.Link key="edit_pedido" href="/cadastro-pedido">
        Cadastrar Pedido
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
