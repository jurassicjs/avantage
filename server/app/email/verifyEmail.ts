import verifyEmailTemplate from './templates/verifyEmailTemplate'
import verifyReminderEmailTemplate from './templates/verifyReminderEmailTemplate'
import { sendEmail } from './emailSender'
import { createOtp } from '../services/otp'

export default async function sendVerificationEmail(email: string, userId: number) {
  const otp = await createOtp(userId)
  const template = verifyEmailTemplate(otp, 'support@fullstackjack.dev', 'Avantage Support', 'Avantage')
  sendEmail({ template, to: email, fromEmail: 'nuxt-mailer@fullstackjack.dev', fromName: 'Nuxt Mailer', subject: 'Nuxt Mailer email verification' })
}

export async function sendReminderVerificationEmail(email: string, userId: number) {
  const otp = await createOtp(userId)
  const template = verifyReminderEmailTemplate(otp, 'support@fullstackjack.dev', 'Avantage Support', 'Avantage')
  sendEmail({ template, to: email, fromEmail: 'nuxt-mailer@fullstackjack.dev', fromName: 'Nuxt Mailer', subject: 'Reminder to Verify your email' })
}
