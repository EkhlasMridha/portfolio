import { useState } from "react";
import { MailIFilled, MailSent, UserFilled } from "../../icons/svg.custom";
import "./Contact.scss";
import { ContactForm } from "./ContactForm";

interface ValidationValueLabel {
  isValid: boolean;
  message: string;
}

interface Validation {
  name?: ValidationValueLabel;
  email?: ValidationValueLabel;
  message?: ValidationValueLabel;
}

function validatePayload(data: any) {
  let status: Validation = {};
  if ((data?.name?.length ?? 0) === 0) {
    status = {
      ...status,
      name: {
        isValid: false,
        message: "Name is required.",
      },
    };
  }
  console.log("After name: ", status);
  if ((data?.email?.length ?? 0) === 0) {
    status = {
      ...status,
      email: {
        isValid: false,
        message: "Please enter your mail address.",
      },
    };
  }
  console.log("After mail: ", status);
  if ((data?.message?.length ?? 0) === 0) {
    status = {
      ...status,
      message: {
        isValid: false,
        message: "Please enter your message.",
      },
    };
  }
  console.log("After message: ", status);
  return status;
}

export const Contact = (props: any) => {
  const [validationState, setValidation] = useState<Validation>();

  const onSubmit = (e: any) => {
    e.preventDefault();

    const { name, email, message } = e.target.elements;

    let payload = {
      name: name?.value,
      email: email?.value,
      message: message?.value,
    };

    let validation = validatePayload(payload);

    if ((validation ?? "") !== "") {
      console.log("Validation: ", validation);
      setValidation(validation);
      return;
    }
    console.log(payload);
  };

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
            Put on your reading glass and tell me about your idea to bring it
            into reality.
          </div>
          <div className="contact-mail cursor-pointer">
            <MailIFilled height={"14px"} />
            <a href="mailto:ekhlasmridha@gmail.com">ekhlasmridha@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="section-1 half-section secondary-background ">
        <ContactForm />
      </div>
    </section>
  );
};
