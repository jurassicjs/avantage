import { getSanitizedUserBySessionToken } from '~/server/app/services/sessionService'
import { verifyOtp } from '~/server/app/services/otp'
import verifyOtpRequest from '~/server/app/formRequests/VerifyOtpRequest'
import { updateIsEmailVerified } from '~~/server/database/repositories/userRespository'
import { ZodError } from "zod"
import sendZodErrorResponse from '~/server/app/errors/responses/ZodErrorsResponse';
import sendDefaultErrorResponse from '~/server/app/errors/responses/DefaultErrorsResponse';
import { getMappedError } from '~~/server/app/errors/errorMapper';

const standardOtpError = getMappedError('Verification', 'Invalid Otp. Try requesting new otp')

export default eventHandler(async (event) => {

    try {
        const authToken = getCookie(event, 'auth_token')

        if (authToken === undefined) {
            return await sendDefaultErrorResponse(event, 'Unauthenticated', 403, 'Unauthenticated')
        }

        const user = await getSanitizedUserBySessionToken(authToken)

        if (user?.id == undefined) {
            throw Error('user id is missing')
        }

        const request = await verifyOtpRequest(event)
        const isVerified = await verifyOtp(user.id, parseInt(request.otp))

        if (!isVerified) {
            return sendError(event, createError({ statusCode: 403, data: standardOtpError }))
        }

        await updateIsEmailVerified(user.id, isVerified)

        return isVerified
    } catch (error: any) {
        if (error.data instanceof ZodError) {
            return await sendZodErrorResponse(event, error.data)
        }

        return await sendDefaultErrorResponse(event, 'Unauthenticated', 403, error)
    }
})