
import { useMailer } from '#mailer'
import { EmailTemplate } from './types/emailTypes'

type SendMail = { template: EmailTemplate, to: string, fromEmail: string, fromName: string, subject: string }
export async function sendEmail(request: SendMail) {
  const mailService = useMailer()

  console.log('mail request', request)

  await mailService.sendMail({
    requestId: 'test-key',
    options: {
      fromEmail: request.fromEmail,
      fromName: request.fromName,
      to: request.to,
      subject: request.subject,
      text: request.template.text,
      html: request.template.html
    }
  })

  return
}