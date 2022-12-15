
import { useMailer } from '#mailer'
import { EmailTemplate } from './types/emailTypes'

type SendMail = {template: EmailTemplate , to: string, from: string,  subject: string}
export async function sendEmail(request: SendMail) {
  const mailService = useMailer()
  const gmailTransporter = mailService.gmailTransporter()

  const runtimeConfig = useRuntimeConfig()

  console.log('mailerUser', runtimeConfig.mailerUser)

  await mailService.sendMail({
    requestId: 'test-key',
    options: {
      to: request.to,
      subject: request.subject,
      text: request.template.text,
      html: request.template.html
    },
    transporter: gmailTransporter
  })

  return 
}