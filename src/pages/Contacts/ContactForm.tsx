import { MailIFilled, MailSent, UserFilled } from "../../icons/svg.custom";
import { useForm } from "../../shared/FormHook/useForm";

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

  function onSubmit(data: Contact) {
    console.log("Form data: ", data);
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
        <button type="submit" className="cursor-pointer">
          Send
          <MailSent height={15} />
        </button>
      </div>
    </form>
  );
};
