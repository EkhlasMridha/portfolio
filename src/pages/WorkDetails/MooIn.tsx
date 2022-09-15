import { useNavigate } from "react-router-dom";
import { LeftArrowIcon } from "../../icons/svg.custom";
import { Footer } from "../../Layout/Footer";
import "./DetailLayout.scss";

const MooIn = (props: any) => {
  const navigate = useNavigate();

  return (
    <>
      <a
        className="back-button cursor-pointer secondary-textcolor"
        onClick={() => navigate(-1)}
      >
        <LeftArrowIcon height={20} />
      </a>
      <div className="detail-container" style={{ height: "100vh" }}>
        <h1 className="text-center cursor-text">Moo-In</h1>
        <p>
          It is a multitenant web application one of the coolest thing I have
          worked on. This web application is used to manage restaurant orders.
        </p>
        <p>
          This is tenant based web application so it can provide multiple
          instances to use for multiple restaurants. It has 2 portals Manager
          and custome
        </p>
        <h4>Manager portal:</h4>
        <p>
          On Manager portal a manager can can set food menu, take orders,
          receive payment etc.
        </p>
        <h4>Customer portal:</h4>
        <p>
          The customer portal is used on the customer side. Customer can view
          restaurant menu, order food and make payment using a secure payment
          gateway.
        </p>
        {/* <FigureContainer items={figureItems1} /> */}
      </div>
      <Footer />
    </>
  );
};

export default MooIn;
