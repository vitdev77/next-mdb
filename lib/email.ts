"use server";

import transporter from "@/lib/nodemailer";

interface SendEmailValues {
  to: string;
  subject: string;
  text: string;
}

export async function sendEmail({ to, subject, text }: SendEmailValues) {
  await transporter.sendMail({
    from: "Next MDB <noreply@next-mdb.dev>",
    to,
    subject,
    text,
  });
}
