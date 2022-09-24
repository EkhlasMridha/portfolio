import {
  MailIFilled,
  MailSent,
  PuffLoader,
  UserFilled,
} from "../../icons/svg.custom";
import { useForm } from "../../shared/FormHook/useForm";
export const { baseURL } = window as any;

interface Contact {
  name: string;
  email: string;
  mailMessage: string;
}

export const ContactForm = (props: any) => {
  const { handleChange, handleSubmit, errors } = useForm<Contact>({
    onSubmit: onSubmit,
    validations: {
      name: {
        required: {
          value: true,
          message: "Name is required",
        },
      },
      email: {
        pattern: {
          value: "[a-z0-9]+@[a-z]+.[a-z]{2,3}",
          message: "Invalid email address",
        },
        required: {
          value: true,
          message: "Email is required",
        },
      },
      mailMessage: {
        required: {
          value: true,
          message: "Please enter your message",
        },
      },
    },
  });

  const loadingSender = (state: boolean = true) => {
    let submitButton = document.getElementById("btn_submit");

    let sendingSpinner = document.getElementById("anm_sending");
    if (state) {
      submitButton?.classList.add("hidden");
      sendingSpinner?.classList.remove("hidden");
    } else {
      submitButton?.classList.remove("hidden");
      sendingSpinner?.classList.add("hidden");
    }
  };

  function onSubmit(data: Contact) {
    loadingSender();
    fetch(baseURL + "message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      loadingSender(false);
    });
  }

  return (
    <form onSubmit={handleSubmit} className="section-2-content padding-side-20">
      <div className="input-item">
        <label>Name</label>
        <div className={"input-element" + (errors?.name ? " error-input" : "")}>
          <div className="addon-before">
            <UserFilled height={"14px"} />
          </div>

          <input name="name" id="name" onChange={handleChange} />

          {errors?.name && <div className="form-error">{errors?.name}</div>}
        </div>
      </div>
      <div className="input-item">
        <label>Email</label>
        <div
          className={"input-element" + (errors?.email ? " error-input" : "")}
        >
          <div className="addon-before">
            <MailIFilled height="12px" />
          </div>
          <input name="email" id="email" type="email" onChange={handleChange} />
          {errors?.email && <div className="form-error">{errors?.email}</div>}
        </div>
      </div>
      <div className="input-item">
        <label>Message</label>
        <div
          className={
            "input-element" + (errors?.mailMessage ? " error-input" : "")
          }
        >
          <textarea id="message" name="mailMessage" onChange={handleChange} />
          {errors?.mailMessage && (
            <div className="form-error">{errors?.mailMessage}</div>
          )}
        </div>
      </div>
      <div className="submit-button">
        <button id="btn_submit" type="submit" className="cursor-pointer">
          Send
          <MailSent height={15} />
        </button>
        <div id="anm_sending" className="flx text-bold sending-button hidden">
          <PuffLoader height={25} width={35} />
          <span>Sending...</span>
        </div>
      </div>
    </form>
  );
};
