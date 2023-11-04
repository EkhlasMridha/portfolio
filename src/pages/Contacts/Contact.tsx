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
          <div className="uppercase highlight-color contact-title cursor-text">
            Contact
          </div>
          <div className="question cursor-text">Want to reach out to me?</div>
          <div className="q-detail cursor-text">
            Send me a message with the topic to discuss.
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
