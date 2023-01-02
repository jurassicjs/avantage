import verifyEmailTemplate from './templates/verifyEmailTemplate'
import { sendEmail } from './emailSender'
import { createOtp } from '../services/otp'

export default async function sendVerificationEmail(email: string, userId: number) {
  const otp = await createOtp(userId)
  const template = verifyEmailTemplate(otp, 'support@fullstackjack.dev', 'Avantage Support', 'Avantage')
  sendEmail({template, to: email, fromEmail: 'jack@fullstackjack.dev', fromName: "Jack", subject:'Avantage email verification'})
}