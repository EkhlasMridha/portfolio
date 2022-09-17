import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SliderLeft, SliderRight } from "../../icons/svg.custom";
import "./Works.scss";

export const Works = (props: any) => {
  let slideIndex = 1;

  useEffect(() => {
    showSlides(slideIndex);
  }, []);

  function plusSlides(direction: any) {
    showSlides((slideIndex += direction), direction);
  }

  // function currentSlide(n: any) {
  //   showSlides((slideIndex = n));
  // }

  function showSlides(n: any, direction: number = 1) {
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

    setAnimations(slides, slideIndex - 1, direction);

    slides[slideIndex - 1].style.display = "flex";
  }

  function setAnimations(
    slides: HTMLCollectionOf<HTMLElement>,
    index: number,
    direction: number
  ) {
    let title = slides[index].getElementsByClassName("work-title");
    let desc = slides[index].getElementsByClassName("work-desc");
    desc[0].classList.remove("work-next", "work-pre");
    desc[0].classList.add(direction > 0 ? "work-next" : "work-pre");
    title[0].classList.remove("work-next", "work-pre");
    title[0].classList.add(direction > 0 ? "work-next" : "work-pre");
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
            <div className="primary-textcolor work-desc">
              Ticketing website with admin dashboard to manage and sell tickets
              of a created event.
            </div>
            <div className="detail-button-container">
              <button className="cursor-pointer btn">View Details</button>
            </div>
          </div>

          <div className="work-item ">
            <h2 className="primary-textcolor work-title uppercase">Booky</h2>
            <div className="work-desc">
              A simple hotel booking system to manage bookings of a hotel.
            </div>
            <div className="detail-button-container">
              <button className="cursor-pointer btn">View Details</button>
            </div>
          </div>

          <div className="work-item ">
            <h2 className="primary-textcolor work-title uppercase">Moo-In</h2>
            <div className="work-desc">
              Restaurant order management system to take customer orders, print
              envoice and take payment.
            </div>
            <div className="detail-button-container">
              <button className="cursor-pointer btn">View Details</button>
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
