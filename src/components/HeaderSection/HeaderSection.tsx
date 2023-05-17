import { ReactComponent as ArrowLeftShort } from "../../assets/icons/arrow-left-short.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./HeaderSection.scss";

function HeaderSection() {
  return (
    <>
      <div className="row d-none d-md-flex position-sticky top-0 top-menu ">
        <div className="col-12 bg-white ">
          <div className="container d-flex justify-content-between gap-4 align-items-center px-8 py-4">
            <Logo className="col-auto" />
            <div className="col search">
              <div className="input-group input-group-lg search ">
                <span className="input-group-text bg-transparent border-0">
                  <Search />
                </span>
                <input
                  type="text"
                  className="form-control border-0 fs-14 fw-medium bg-transparent px-2"
                  placeholder="Search for your favorite groups in ATG"
                />
              </div>
            </div>
            <div className="col-auto  fs-16 ">
              <div className="row p-0 align-items-center flex-nowrap g-0">
                <span className="col-auto p-0">Create account.</span>
                <div className="dropdown ">
                  <button
                    className="btn fs-16 btn-sm text-primary dropdown-toggle fw-bold"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    It's free!
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Register
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row-fluid h-35 cover">
        <div className="bg-veil justify-content-between d-flex flex-column  p-3">
          <div className="container d-flex justify-content-between p-0 md-invisible">
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
          <div className="container col-md-10 py-3 text-white">
            <div className="row fs-17 fw-bold fs-md-36">
              Computer Engineering
            </div>
            <div className="row fs-12 fs-18-md">
              142,765 Computer Engineers follow this
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
