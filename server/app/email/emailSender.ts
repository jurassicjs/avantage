import { EmailTemplate } from './types/emailTypes'
import { useMailer } from '#mailer'

export type SendMail = {template: EmailTemplate, to: string, from: string, subject: string}

export async function sendGmail (request: SendMail) {
  const mailService = useMailer()
  const gmailTransporter = mailService.gmailTransporter()

  return await gmailTransporter.sendMail({
    requestId: 'test-key',
    options: {
      to: request.to,
      subject: request.subject,
      text: request.template.text,
      html: request.template.html
    },
    transporter: gmailTransporter
  })
}
