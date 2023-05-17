import "bootstrap/dist/js/bootstrap.min.js";
import "./App.scss";

import { ReactComponent as Pencil } from "./assets/icons/pencil.svg";
import BodySection from "./components/BodySection/BodySection";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import LoginModal from "./components/LoginModal/LoginModal";
import RegisterModal from "./components/RegisterModal/RegisterModal";

function App() {
  return (
    <div className="root container-fluid p-0 min-vh-100 bg-gray-200 bg-md-white pb-5">
      <HeaderSection />
      <BodySection />
      <button
        className="fab btn rounded-circle position-fixed d-md-none"
        data-bs-toggle="modal"
        data-bs-target="#login"
      >
        <Pencil height={24} width={24} fill="#fff" />
      </button>
      <RegisterModal />
      <LoginModal />
    </div>
  );
}

export default App;
