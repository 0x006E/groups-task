import "bootstrap/dist/js/bootstrap.min.js";
import "./App.scss";
import { ReactComponent as Pencil } from "./assets/icons/pencil.svg";
import BodySection from "./components/BodySection/BodySection";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <div className="container-fluid p-0 min-vh-100 bg-gray-200">
      <HeaderSection />
      <BodySection />
      <button
        className="fab btn rounded-circle position-fixed"
        data-bs-toggle="modal"
        data-bs-target="#modal"
      >
        <Pencil height={24} width={24} fill="#fff" />
      </button>
      <Modal title="Create Account">
        <div className="input-group w-100 rounded-top">
          <input
            type="text"
            className="form-control fs-13 bg-gray-100 fw-medium"
            placeholder="First Name"
          />
          <input
            type="text"
            className="form-control fs-13 bg-gray-100 fw-medium "
            placeholder="Last Name"
          />
        </div>
        <input
          type="text"
          className="form-control fs-13 bg-gray-100 fw-medium rounded-0"
          placeholder="Email"
        />
        <input
          type="text"
          className="form-control fs-13 bg-gray-100 fw-medium"
          placeholder="Password"
        />
        <input
          type="text"
          className="form-control fs-13 bg-gray-100 fw-medium"
          placeholder="Confirm Password"
        />
      </Modal>
    </div>
  );
}

export default App;
