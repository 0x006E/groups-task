import { ThreeDots } from "react-bootstrap-icons";
import ArticleCardContent from "./ArticleCardContent/ArticleCardContent";
import "./Card.scss";
import CardFooter from "./CardFooter/CardFooter";
import EducationCardContent from "./EducationCardContent/EducationCardContent";
import JobCardContent, {
  JobCardContentProps,
} from "./JobCardContent/JobCardContent";
import MeetupCardContent, {
  MeetupCardContentProps,
} from "./MeetupCardContent/MeetupCardContent";

export type CardType = "article" | "education" | "job" | "meetup";

type CardContentProps = {
  article: Record<string, never>;
  education: Record<string, never>;
  job: JobCardContentProps;
  meetup: MeetupCardContentProps;
};

export interface CardProps {
  title: string;
  type: CardType;
  content?: CardContentProps[CardType];
  image?: string;
}

const cardTypeText: { [key in CardType]: string } = {
  article: "✍️ Article",
  education: "🔬️ Education",
  job: "💼️ Job",
  meetup: "🗓️ Meetup",
};

function Card(props: CardProps) {
  const {
    title = "What if famous brands had regular fonts? Meet RegulaBrands!",
    type = "education",
    content = {},
    image,
  } = props;

  const CardTypeText = cardTypeText[type];

  return (
    <div className="card col-12 border-md rounded-md-3 border-0 shadow-1 shadow-md-none border-md-1  border-md-gray-400 px-0 rounded-0 ">
      {image && (
        <img
          src={image}
          className="card-img-top card-cover-img rounded-0"
          alt="Cover image"
        />
      )}
      <div className="card-header bg-white border-0 pb-0 pb-md-1 fs-14 fs-md-18 text-gray-900 fw-medium ">
        {CardTypeText}
      </div>
      <div className="card-body pt-1 pb-md-1">
        <div className="row align-items-start pb-md-2">
          <h5 className="card-title fw-semibold fs-md-22 fs-16 col-10">
            {title}
          </h5>
          <button className="col-2 btn p-0 py-md-2 fs-md-18">
            <ThreeDots size={"1.5em"} />
          </button>
        </div>
        {
          {
            article: <ArticleCardContent />,
            education: <EducationCardContent />,
            job: <JobCardContent {...content} />,
            meetup: <MeetupCardContent {...content} />,
          }[type]
        }

        <CardFooter />
      </div>
    </div>
  );
}

export default Card;
