import { ReactComponent as Calendar } from "../../../assets/icons/calendar.svg";
import { ReactComponent as Location } from "../../../assets/icons/location.svg";

export interface MeetupCardContentProps {
  date?: string;
  location?: string;
}

function MeetupCardContent(props: MeetupCardContentProps) {
  const { date = "12 Dec 2018", location = "Ahmedabad, Delhi" } = props;
  return (
    <>
      <div className="row">
        <span className="col-6 text-truncate fw-medium fs-12">
          <div className="d-flex align-items-center justify-content-start">
            <Calendar height="1rem" width="1rem" />
            <span className="col text-truncate">&nbsp; {date}</span>
          </div>
        </span>
        <span className="col-6 text-truncate medium fs-12 d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-start">
            <Location height="1rem" width="1rem" />
            <span className="col text-truncate">&nbsp; {location}</span>
          </div>
        </span>
      </div>
      <div className="row my-3 px-3 ">
        <button className="btn text-orange  fs-13 fw-semibold border-1 border-das border-gray-400 rounded-8">
          Visit website
        </button>
      </div>
    </>
  );
}

export default MeetupCardContent;
