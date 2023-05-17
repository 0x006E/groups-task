import { ReactComponent as ShareFill } from "../../../assets/icons/share-fill.svg";
import "./CardFooter.scss";

function CardFooter() {
  return (
    <div className="card-footer bg-white border-0 px-3 row">
      <img
        src="https://source.unsplash.com/random?potrait"
        className="rounded-circle avatar p-0 col-2"
        alt="Profile image"
      />
      <div className="col d-md-flex justify-content-md-between align-items-md-center">
        <span className="row  mx-1 fs-13 fs-md-18 fw-semibold">Sarah West</span>
        <span className="row mx-1 fs-12 fw-medium text-gray-800 fs-md-14 fw-md-medium ">
          4.8k Views
        </span>
      </div>
      <button className="btn btn-secondary btn-sm fs-12 col-auto my-2">
        <ShareFill className="me-1" height="1.5em" width="1.5em" />
        <span className="d-md-none">Share</span>
      </button>
    </div>
  );
}

export default CardFooter;
