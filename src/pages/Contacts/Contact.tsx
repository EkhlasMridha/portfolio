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
        <div className="padding-side-20 content-container">
          <h1 className="text-center">Let's Talk</h1>
          <div className="text-center">
            Do you need a digital solution to your problem?
          </div>
          <div
            className="text-center highlight-color"
            style={{ marginTop: "12px" }}
          >
            Send me a message
          </div>
          <div
            className="flx contact-mail cursor-pointers"
            style={{
              justifyContent: "center",
              paddingTop: "14px",
              alignItems: "center",
              columnGap: 8,
            }}
          >
            <MailIFilled height={"14px"} />{" "}
            <a className="cursor-pointer" href="mailto:ekhlasmridha@gmail.com">
              ekhlasmridha@gmail.com
            </a>
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
