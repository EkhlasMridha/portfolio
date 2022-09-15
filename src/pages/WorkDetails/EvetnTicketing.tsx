import { LeftArrowIcon } from "../../icons/svg.custom";
import "./DetailLayout.scss";
import { FigureContainer, FigureItems } from "../../shared/FigureContainer";
import { Footer } from "../../Layout/Footer";
import { useNavigate } from "react-router-dom";

const figureItems1: FigureItems = [
  {
    caption: "Event list",
    imageSource: "./assets/images/eventlist.png",
  },
  {
    caption: "Edit event",
    imageSource: "./assets/images/evenedit.png",
  },
  {
    caption: "Create event ticket",
    imageSource: "./assets/images/createticket.png",
  },
];

const figureItems2: FigureItems = [
  {
    caption: "Sold Tickets",
    imageSource: "./assets/images/orders.png",
  },
];

const figureItems3: FigureItems = [
  {
    caption: "Purchased ticket",
    imageSource: "./assets/images/purchase_ticket.png",
  },
];

const EventTicketing = (props: any) => {
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
        <h1 className="text-center cursor-text">Event Ticketing</h1>
        <p>
          This application is developed for a music band who wants to sell their
          concert ticket online. This web app includes 3 roles: Admin and
          Scanner and the customers whose require no user creation to this web
          app.
        </p>
        <FigureContainer items={figureItems1} />
        <p>
          On Admin portal from where the authority can create a event and create
          tickets to sell. The admin can also sends free ticket to their guest.
        </p>
        <FigureContainer items={figureItems2} />
        <p>
          The admin can also view orders from customer and can resend tickets in
          case of sending failer.
        </p>
        <p>
          On Scanner portal they can scan the barcode of a ticket during a guest
          entry using a barcode scanner which is also implemented on the scanner
          portal. The barcode scanner can be used with any device which has a
          camera.
        </p>
        <FigureContainer items={figureItems3} />
        <p>
          The user can purchase ticket from the public portal and make payment
          through a payment gateway. After successfull purchase of a ticket the
          user will receive his/her ticket by email on the email address they
          have used to purchase ticket. On the event dashboard a map has been
          integrated to show the exact location of the event.
        </p>
        <p>
          This web application has been developed using ASP.NET 6 as the backend
          framework, Database: MongoDB and Angular 13 on the frontend.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default EventTicketing;
