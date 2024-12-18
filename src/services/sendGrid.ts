export const sendEmail = async (
  message: string,
  toEmail: string = "aymen@diva-software.com",
  successMessage?: string
) => {
  try {
    const body = {
      from: "aymen@diva-software.com",
      to: toEmail,
      subject: "Contact Support",
      html: successMessage
        ? `<div>${successMessage}</div>`
        : `<div>${JSON.stringify(message)}</div>`,
    };
    const response = await fetch(import.meta.env.VITE_SENDGRID_MAIL, {
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
