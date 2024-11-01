export const sendConfirmationEmail = (email) => async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  console.log(req, res);
  if (!email) {
    return res.status(400).send("E-postadress saknas");
  }

  try {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Bekräftelsemail",
      html: `<h1>Hej!</h1><p>Tack för din anmälan. Vi bekräftar härmed din registrering.</p>`,
    };

    // Skicka mailet
    await transporter.sendMail(mailOptions);

    res.status(200).send("Bekräftelsemail har skickats");
  } catch (error) {
    console.error("Fel vid skickande av mail:", error);
    res.status(500).send("Det gick inte att skicka bekräftelsemailet");
  }
};
