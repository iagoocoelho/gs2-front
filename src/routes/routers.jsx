import Toast from "components/toast/toast";
import Header from "components/header/header";
import { connect } from "react-redux";
import Login from "pages/login/login";
import { useEffect, useRef } from "react";
import PrivateRoutes from "./privateRoutes";
import { useNavigate } from "react-router-dom";

const Routers = ({ auth_token }) => {
  const isFirstRender = useRef(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      if (!auth_token) {
        navigate("/");
      }
    }
  }, [auth_token, navigate]);

  return (
    <>
      {auth_token ? (
        <>
          <Header />

          <PrivateRoutes />
        </>
      ) : (
        <Login />
      )}
      <Toast />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth_token: state.auth.data?.token,
    auth_state: state.auth,
  };
};


export default connect(mapStateToProps)(Routers);
