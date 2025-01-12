export async function sendEmails(emails) {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
  // Looping through all emails that were registered
  const emailPromises = emails.map((email) => {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Bekräftelsemail",
      html: `<h1>Hej!</h1><p>Tack för din anmälan. Vi bekräftar härmed din registrering.</p>`,
    };
    transporter.sendMail(mailOptions);
  });

  // Prosime.all to wait for all emails to be sent
  return await Promise.all(emailPromises);
}
