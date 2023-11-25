import { Routes, Route } from "react-router-dom";
import Home from "pages/home/home";
import { connect } from "react-redux";
import { PermissionsByProfile } from "utils/variables";
import FormDoctor from "components/formDoctor/formDoctor";
import FormPrescription from "components/formPrescription/formPrescription";
import DoctorList from "pages/doctorList/doctorList";

const privateRoutes = [
  {
    lista_medico: (
      <Route
        key="lista_medico"
        path={"/listagem-medico"}
        element={<DoctorList />}
      />
    ),
  },
  {
    cadastra_medico: (
      <Route
        key="cadastra_medico"
        path={"/cadastro-medico"}
        element={<FormDoctor />}
      />
    ),
  },
  {
    edita_medico: (
      <Route
        key="edita_medico"
        path={"/editar-medico/:id"}
        element={<FormDoctor editMode />}
      />
    ),
  },
  {
    cadastro_receita: (
      <Route
        key="cadastro_receita"
        path={"/cadastro-receita"}
        element={<FormPrescription />}
      />
    ),
  },
];

const PrivateRoute = ({ auth_state }) => {
  const allowedRoutes = privateRoutes
    .map((route) => {
      let hasPerm = PermissionsByProfile[auth_state.data.perfil].find((x) => {
        return Object.keys(route).pop() === x;
      });

      if (hasPerm) return route[Object.keys(route)];

      return false;
    })
    .filter((allowed) => allowed);

  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      {allowedRoutes.map((x) => x)}
    </Routes>
  );
};

const mapStateToProps = (state) => {
  return {
    auth_state: state.auth,
  };
};

export default connect(mapStateToProps, null)(PrivateRoute);
