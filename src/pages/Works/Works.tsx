import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SliderLeft, SliderRight } from "../../icons/svg.custom";
import "./Works.scss";

export const Works = (props: any) => {
  let slideIndex = 1;

  useEffect(() => {
    showSlides(slideIndex);
  }, []);

  function plusSlides(n: any) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n: any) {
    showSlides((slideIndex = n));
  }

  function showSlides(n: any) {
    let i;
    let slides = document.getElementsByClassName(
      "work-item"
    ) as HTMLCollectionOf<HTMLElement>;

    if (n > slides?.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides?.length;
    }
    for (i = 0; i < slides?.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";
  }
  return (
    <section
      key={"works"}
      className="primary-textcolor flx-col min-h-screen primary-background workpage-container section-container"
      id="works"
    >
      <div className="workpage-content padding-side-20">
        <div className="flx row workitem-container">
          <div className="work-item ">
            <h2 className="primary-textcolor work-title uppercase">
              Event Ticketing
            </h2>
            <div className="primary-textcolor">
              Ticketing website with admin dashboard to manage and sell tickets
              of a created event.
            </div>
            <div className="detail-button-container">
              <div className="cursor-pointer">View Details</div>
            </div>
          </div>

          <div className="work-item ">
            <h2 className="primary-textcolor work-title uppercase">Booky</h2>
            <div>
              A simple hotel booking system to manage bookings of a hotel.
            </div>
            <div className="detail-button-container">
              <div className="cursor-pointer">View Details</div>
            </div>
          </div>

          <div className="work-item ">
            <h2 className="primary-textcolor work-title uppercase">Moo-In</h2>
            <div>
              Restaurant order management system to take customer orders, print
              envoice and take payment.
            </div>
            <div className="detail-button-container">
              <div className="cursor-pointer">View Details</div>
            </div>
          </div>
          <div className="navigation-sliders flx flx-row">
            <div
              className="slider-container primary-textcolor cursor-pointer"
              onClick={() => plusSlides(-1)}
            >
              <div className="slider-arrow">
                <SliderLeft height={30} />
              </div>
            </div>
            <div
              className=" slider-container primary-textcolor cursor-pointer"
              onClick={() => plusSlides(1)}
            >
              <div className="slider-arrow">
                <SliderRight height={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
