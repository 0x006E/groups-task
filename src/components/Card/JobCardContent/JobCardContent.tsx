import { ReactComponent as Location } from "../../../assets/icons/location.svg";
import { ReactComponent as WorkOutline } from "../../../assets/icons/work-outline.svg";

export interface JobCardContentProps {
  company?: string;
  location?: string;
}

function JobCardContent(props: JobCardContentProps) {
  const { company = "Innovating technologies", location = "Noida, Delhi" } =
    props;
  return (
    <>
      <div className="row">
        <span className="col-6 col-md-auto me-md-3 text-truncate fs-md-15 fw-medium fs-12">
          <div className="d-flex align-items-center justify-content-start">
            <WorkOutline height="1.5em" width="1.5em" />
            <span className="col text-truncate">&nbsp; {company}</span>
          </div>
        </span>
        <span className="col-6 col-md-auto me-md-3 text-truncate fw-medium fs-md-15 fs-12 d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-start">
            <Location height="1.5em" width="1.5em" />
            <span className="col text-truncate">&nbsp; {location}</span>
          </div>
        </span>
      </div>
      <div className="row my-3 px-3 ">
        <button className="btn text-green  fs-13 fw-semibold border-1 border-das border-gray-400 rounded-8">
          Apply on Timesjobs
        </button>
      </div>
    </>
  );
}

export default JobCardContent;
