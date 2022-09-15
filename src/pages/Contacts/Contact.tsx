import { MailIFilled, UserFilled } from "../../icons/svg.custom";
import "./Contact.scss";

export const Contact = (props: any) => {
  return (
    <section
      key={"contact"}
      className="min-h-screen section-container row contact-container"
      id="contact"
    >
      <div className="section-1 half-section  primary-background primary-textcolor">
        <div className="padding-side-20 content-container contact-text-section">
          {/* <h1 className="text-center">Let's Talk</h1> */}
          <div className="uppercase highlight-color contact-title">Contact</div>
          <div className="question">Need a solution to your problem?</div>
          <div className="q-detail">
            Be ready to enter the digital world and tell me about your idea to
            get your dream application.
          </div>
          <div className="contact-mail cursor-pointer">
            <MailIFilled height={"14px"} />
            <a href="mailto:ekhlasmridha@gmail.com">ekhlasmridha@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="section-1 half-section secondary-background ">
        <div className="section-2-content padding-side-20">
          <div className="input-item">
            <label>Name</label>
            <div className="input-element">
              <div className="addon-before">
                <UserFilled height={"14px"} />
              </div>

              <input name="name" id="name" />
            </div>
          </div>
          <div className="input-item">
            <label>Email</label>
            <div className="input-element">
              <div className="addon-before">
                <MailIFilled height="12px" />
              </div>
              <input name="email" id="email" type="email" />
            </div>
          </div>
          <div className="input-item">
            <label>Message</label>
            <div className="input-element">
              <textarea />
            </div>
          </div>
          <div className="submit-button">
            <button type="submit" className="cursor-pointer">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
