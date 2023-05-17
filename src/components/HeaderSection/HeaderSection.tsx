import { ReactComponent as ArrowLeftShort } from "../../assets/icons/arrow-left-short.svg";
import "./HeaderSection.scss";

function HeaderSection() {
  return (
    <div className="row-fluid h-35 cover">
      <div className="bg-veil justify-content-between d-flex flex-column  p-3">
        <div className="container d-flex justify-content-between p-0">
          <div className="col-auto">
            <button className="btn btn-text text-light p-0">
              <ArrowLeftShort />
            </button>
          </div>
          <div className="col-auto p-0">
            <button className="btn btn-outline-light btn-sm fs-12">
              Join Group
            </button>
          </div>
        </div>
        <div className="container py-3 text-white">
          <div className="row fs-17 fw-bold">Computer Engineering</div>
          <div className="row fs-12">
            142,765 Computer Engineers follow this
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
