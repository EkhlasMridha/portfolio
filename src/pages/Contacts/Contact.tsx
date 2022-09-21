import { MailIFilled } from "../../icons/svg.custom";
import "./Contact.scss";
import { ContactForm } from "./ContactForm";

export const Contact = (props: any) => {
  return (
    <section
      key={"contact"}
      className="min-h-screen section-container row contact-container"
      id="contact"
    >
      <div className="section-1 half-section  primary-background primary-textcolor">
        <div className="padding-side-20 content-container contact-text-section">
          <div className="uppercase highlight-color contact-title">Contact</div>
          <div className="question">Need a solution to your problem?</div>
          <div className="q-detail">
            Put on your reading glass and send me your idea to bring it into
            reality.
          </div>
          <div className="contact-mail cursor-pointer">
            <MailIFilled height={"14px"} />
            <a href="mailto:ekhlasmridha@gmail.com">ekhlasmridha@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="flx half-section secondary-background ">
        <ContactForm />
      </div>
    </section>
  );
};
