import { ThreeDots } from "react-bootstrap-icons";
import "./Card.scss";
import CardFooter from "./CardFooter/CardFooter";
function Card() {
  return (
    <div className="card col-12 border-0 shadow-1 px-0 rounded-0">
      <img
        src="https://source.unsplash.com/random?nature"
        className="card-img-top card-cover-img rounded-0"
        alt="Cover image"
      />
      <div className="card-header bg-white border-0 pb-0 fs-14 text-gray-900 fw-medium ">
        ✍️ Article
      </div>
      <div className="card-body pt-1">
        <div className="row align-items-start">
          <h5 className="card-title fs-16 col-10">
            What if famous brands had regular fonts? Meet RegulaBrands!
          </h5>
          <button className="col-2 btn p-0">
            <ThreeDots size={"1.5em"} />
          </button>
        </div>
        <p className="card-text fs-14 text-truncate">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <CardFooter />
      </div>
    </div>
  );
}

export default Card;
