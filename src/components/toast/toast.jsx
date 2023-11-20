import React, { useCallback, useEffect } from "react";
import { Alert, Col } from "react-bootstrap";
import { connect } from "react-redux";
import * as toastActions from "store/toast/actions";
import "./toast.scss";

export const Toast = ({ options, hideToastr }) => {
  const close = useCallback(() => {
    hideToastr();
  }, [hideToastr]);

  useEffect(() => {
    if (options.open) {
      let timer1 = setTimeout(() => {
        close();
      }, 2500);

      return () => {
        clearTimeout(timer1);
      };
    }
  }, [close, options.open]);

  return (
    <Col className={`toast-custom ${options.open ? "d-flex" : "d-none"}`}>
      <Alert dismissible onClose={() => hideToastr()} variant={options.type}>
        {options.message}
      </Alert>
    </Col>
  );
};

const mapStateToProps = (state) => {
  return {
    options: state.toast,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showToastr: (options) => {
      dispatch(toastActions.showToastr(options));
    },
    hideToastr: () => {
      dispatch(toastActions.hideToastr());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Toast);
