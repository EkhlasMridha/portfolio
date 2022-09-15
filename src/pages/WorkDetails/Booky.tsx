import { createBrowserHistory } from "@remix-run/router";
import { useNavigate } from "react-router-dom";
import { LeftArrowIcon } from "../../icons/svg.custom";
import { Footer } from "../../Layout/Footer";
import { FigureContainer, FigureItems } from "../../shared/FigureContainer";
import "./DetailLayout.scss";

const figureItems1: FigureItems = [
  {
    caption: "Event list",
    imageSource: "./assets/images/bookyguests.png",
  },
  {
    caption: "Edit event",
    imageSource: "./assets/images/createbooking.png",
  },
];

const Booky = (props: any) => {
  const navigate = useNavigate();
  return (
    <>
      <a
        className="back-button cursor-pointer secondary-textcolor"
        onClick={() => navigate(-1)}
      >
        <LeftArrowIcon height={20} />
      </a>
      <div className="detail-container">
        <h1 className="text-center cursor-text">Booky</h1>
        <p>
          It is hotel booking management system where hotel bookings can be
          managed with nice a ui with booking timeline.
          <br />A hotel manager can create booking with user detail and view
          existing booking in a timeline like graph. This web site is secured
          with proper JWT authentication system.
        </p>
        <p>
          It is deveoped with ASP.NET 3.1 , Angular 10 and MySql as a database.
        </p>
        <FigureContainer items={figureItems1} />
      </div>
      <Footer />
    </>
  );
};

export default Booky;
