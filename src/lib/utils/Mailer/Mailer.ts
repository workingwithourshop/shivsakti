import { Resend } from 'resend';
import MailContent from './MailContent';
const resend = new Resend(process.env.RESEND_API_KEY || "re_LW5BH5dr_NEwU5u4TRwMmyfxCM4jKQnFY");

export async function sendEmail(to: string, subject: string, content: string) {
  const { data, error } = await resend.emails.send({
    from: 'Shivsakti testing  <onboarding@resend.dev>',
    to: to || "workingwithourshop@gmail.com",
    subject,
    react: MailContent({ content }),
  });

  if (error) {
    console.error(error);
    throw new Error('Failed to send email');
  }

  return data;
}

sendEmail('workingwithourshop@gmail.com', 'Test Email', 'Good to see you');
