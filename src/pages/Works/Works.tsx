import "./Works.scss";

export const Works = (props: any) => {
  return (
    <section
      key={"works"}
      className="primary-textcolor flx-col min-h-screen primary-background workpage-container section-container"
      id="works"
    >
      <div className="workpage-content content-container padding-side-20">
        <div className="workpage-header">
          <h1 className="uppercase hr-lines">
            <span>Top Works</span>
          </h1>
        </div>
        <div className="flx row workitem-container">
          <div className="work-item cursor-pointer">
            <h2 className="highlight-color text-center">Event Ticketing</h2>
            <p className="text-center">
              Ticketing website with admin dashboard to manage and sell tickets
              of a created event.
            </p>
          </div>
          <div className="work-item cursor-pointer">
            <h2 className="highlight-color text-center">Booky</h2>
            <p className="text-center">
              A simple hotel booking system to manage bookings of a hotel.
            </p>
          </div>
          <div className="work-item cursor-pointer">
            <h2 className="highlight-color text-center">Moo-In</h2>
            <p className="text-center">
              Restaurant order management system to take customer orders, print
              envoice and take payment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
