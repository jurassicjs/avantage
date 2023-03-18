import verifyEmailTemplate from './templates/verifyEmailTemplate'
import verifyReminderEmailTemplate from './templates/verifyReminderEmailTemplate'
import { sendGmail } from './emailSender'
import { createOtp } from '../services/otp'

export default async function sendVerificationEmail(email: string, userId: number) {
  const otp = await createOtp(userId)
  const template = verifyEmailTemplate(otp, 'support@fullstackjack.dev', 'Avantage Support', 'Avantage')
  sendGmail({ template, to: email, from: 'Rick', subject: 'Nuxt Mailer email verification' })
}

export async function sendReminderVerificationEmail(email: string, userId: number) {
  const otp = await createOtp(userId)
  const template = verifyReminderEmailTemplate(otp, 'support@fullstackjack.dev', 'Avantage Support', 'Avantage')
  sendGmail({ template, to: email, from: 'nuxt-mailer@fullstackjack.dev', subject: 'Reminder to Verify your email' })
}
