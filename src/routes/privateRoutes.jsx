import { Routes, Route } from "react-router-dom";
import Home from "pages/home/home";
import FormSupplier from "components/formSupplier/formSupplier";
import OrderList from "pages/orderList/orderList";
import FormCustomer from "components/formCustomer/formCustomer";
import FormMaterial from "components/formMaterial/formMaterial";
import FormProduct from "components/formProduct/formProduct";
import SupplierList from "pages/supplierList/supplierList";
import MaterialList from "pages/materialList/materialList";
import CustomerList from "pages/customerList/customerList";
import ProductList from "pages/productList/productList";
import FormOrder from "components/formOrder/formOrder";
import { connect } from "react-redux";
import { PermissionsByProfile } from "utils/variables";
import FormDoctor from "components/formDoctor/formDoctor";
import FormPrescription from "components/formPrescription/formPrescription";

const privateRoutes = [
  {
    lista_fornecedor: (
      <Route
        key="lista_fornecedor"
        path={"/listagem-fornecedor"}
        element={<SupplierList />}
      />
    ),
  },
  {
    cadastro_fornecedor: (
      <Route
        key="cadastro_fornecedor"
        path={"/cadastro-fornecedor"}
        element={<FormSupplier />}
      />
    ),
  },
  {
    edit_fornecedor: (
      <Route
        key="edit_fornecedor"
        path={"/editar-fornecedor/:id"}
        element={<FormSupplier editMode />}
      />
    ),
  },
  {
    lista_cliente: (
      <Route
        key="lista_cliente"
        path={"/listagem-cliente"}
        element={<CustomerList />}
      />
    ),
  },
  {
    cadastro_cliente: (
      <Route
        key="cadastro_cliente"
        path={"/cadastro-cliente"}
        element={<FormCustomer />}
      />
    ),
  },
  {
    edit_cliente: (
      <Route
        key="edit_cliente"
        path={"/editar-cliente/:id"}
        element={<FormCustomer editMode />}
      />
    ),
  },
  {
    lista_material: (
      <Route
        key="lista_material"
        path={"/listagem-material"}
        element={<MaterialList />}
      />
    ),
  },
  {
    cadastro_material: (
      <Route
        key="cadastro_material"
        path={"/cadastro-material"}
        element={<FormMaterial />}
      />
    ),
  },
  {
    edit_material: (
      <Route
        key="edit_material"
        path={"/editar-material/:id"}
        element={<FormMaterial editMode />}
      />
    ),
  },
  {
    lista_produto: (
      <Route
        key="lista_produto"
        path={"/listagem-produto"}
        element={<ProductList />}
      />
    ),
  },
  {
    cadastro_produto: (
      <Route
        key="cadastro_produto"
        path={"/cadastro-produto"}
        element={<FormProduct />}
      />
    ),
  },
  {
    edit_produto: (
      <Route
        key="edit_produto"
        path={"/editar-produto/:id"}
        element={<FormProduct editMode />}
      />
    ),
  },
  {
    lista_pedido: (
      <Route
        key="lista_pedido"
        path={"/lista-pedidos"}
        element={<OrderList />}
      />
    ),
  },
  {
    cadastro_pedido: (
      <Route
        key="cadastro_pedido"
        path={"/cadastro-pedido"}
        element={<FormOrder />}
      />
    ),
  },
  {
    edit_pedido: (
      <Route
        key="edit_pedido"
        path={"/editar-pedido/:id"}
        element={<FormOrder editMode />}
      />
    ),
  },
  {
    view_pedido: (
      <Route
        key="view_pedido"
        path={"/visualizar-pedido/:id"}
        element={<FormOrder viewMode />}
      />
    ),
  },
];

const PrivateRoute = ({ auth_state }) => {
  // const allowedRoutes = privateRoutes
  //   .map((route) => {
  //     let hasPerm = PermissionsByProfile[auth_state.data.perfil].find((x) => {
  //       return Object.keys(route).pop() === x;
  //     });

  //     if (hasPerm) return route[Object.keys(route)];

  //     return false;
  //   })
  //   .filter((allowed) => allowed);

  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      {/* {allowedRoutes.map((x) => x)} */}

      <Route
        key="cadastro_medico"
        path={"/cadastro-medico"}
        element={<FormDoctor />}
      />

      <Route
        key="cadastro_receita"
        path={"/cadastro-receita"}
        element={<FormPrescription />}
      />

    </Routes>
  );
};

const mapStateToProps = (state) => {
  return {
    auth_state: state.auth,
  };
};

export default connect(mapStateToProps, null)(PrivateRoute);
