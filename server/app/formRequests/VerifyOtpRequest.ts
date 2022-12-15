import { z, parseBodyAs, } from "@sidebase/nuxt-parse"
import { H3Event } from "h3"

const bodySchema = z.object({
  otp: z.string({
    required_error: 'otp is required',
  })
    .min(6, { message: 'otp is required' })
})

export default async function verifyOtpRequest(event: H3Event) {
  return await parseBodyAs(event, bodySchema)
}