import { ReactComponent as Eye } from "../../assets/icons/eye.svg";
import { ReactComponent as FB } from "../../assets/icons/fb.svg";
import { ReactComponent as Google } from "../../assets/icons/google.svg";
import Modal from "../Modal/Modal";

function RegisterModal() {
  return (
    <Modal title="Create Account" id="register">
      <div className="input-group w-100 rounded-top ">
        <input
          type="text"
          className="form-control fs-13 bg-gray-100 fw-medium rounded-start py-2"
          style={{ borderBottomLeftRadius: 0, borderBottom: 0 }}
          placeholder="First Name"
        />
        <input
          type="text"
          className="form-control fs-13 bg-gray-100 fw-medium rounded-end py-2"
          placeholder="Last Name"
          style={{ borderBottomRightRadius: 0, borderBottom: 0 }}
        />
      </div>

      <input
        type="text"
        className="form-control fs-13 bg-gray-100 fw-medium rounded-0 border-bottom-0 py-2"
        placeholder="Email"
      />
      <div className="input-group w-100 ">
        <input
          type="password"
          className="form-control fs-13 bg-gray-100 fw-medium border-bottom-0 border-end-0 py-2"
          placeholder="Password"
        />
        <span className="bg-gray-100 border-1 border d-flex border-start-0 align-items-center">
          <Eye className="me-2" />
        </span>
      </div>
      <input
        type="password"
        className="form-control fs-13 bg-gray-100 fw-medium py-2"
        placeholder="Confirm Password"
      />
      <div className="row justify-content-between px-3 mt-4">
        <button className="btn btn-primary btn-lg rounded-pill col-auto fs-13 fw-semibold">
          Create Account
        </button>
        <button
          className="btn btn-text text-dark fw-medium col-auto fs-13 text-decoration-underline fw-medium  "
          data-bs-toggle="modal"
          data-bs-target="#login"
        >
          Or, Sign in
        </button>
      </div>
      <div className="row justify-content-center px-3 mt-4">
        <button className="fs-13 text-black btn border-gray-400 btn-lg mb-2 rounded-3 d-flex gap-2 justify-content-center align-items-center">
          <FB />
          &nbsp;Sign up with Facebook
        </button>
        <button className="fs-13 text-black btn border-gray-400 btn-lg rounded-3 d-flex gap-2 justify-content-center align-items-center">
          <Google />
          &nbsp;Sign up with Google
        </button>
      </div>
      <div className="mt-3 fs-11 text-center row">
        <span className="col-3" />
        <span className="col-6">
          By signing up, you agree to our Terms & conditions, Privacy policy
        </span>
        <span className="col-3" />
      </div>
    </Modal>
  );
}

export default RegisterModal;
