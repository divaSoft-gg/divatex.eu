import { ContactForm } from "../common/types";

export const sendEmail = async (
  message: ContactForm,
  toEmail: string = "support@diva-software.io",
  successMessage?: string
) => {
  try {
    const body = {
      from: "aymen@diva-software.com",
      to: toEmail,
      subject: "Contact Support",
      html: successMessage
        ? `<div>${successMessage}</div>`
        : `<div>
        <ul>
        <li>First Name: ${message.firstName} </li>
        <li>Last Name: ${message.lastName} </li>
        <li>Company: ${message.company} </li>
        <li>Email: ${message.email} </li>
        <li>Phone: ${message.phone} </li>
        <li>Message: ${message.message} </li>

        </ul>
        </div>`,
    };
    const response = await fetch(process.env.VITE_SENDGRID_MAIL as string, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, body: ${errorBody}`
      );
    }
    return true;
  } catch (e) {
    return false;
  }
};
