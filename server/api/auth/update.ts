import { H3Event, sendError } from 'h3'
import { IUser } from '~/types/IUser';
import { updateUser } from '~/server/database/repositories/userRespository'
import { ZodError } from "zod"
import sendDefaultErrorResponse from '~~/server/app/errors/responses/DefaultErrorsResponse';
import { validateUser } from '~/server/app/services/userService';
import { makeSession } from '~~/server/app/services/sessionService';
import sendZodErrorResponse from '~~/server/app/errors/responses/ZodErrorsResponse';
import { getSanitizedUserBySessionToken } from '~/server/app/services/sessionService'
import { getMappedError } from '~~/server/app/errors/errorMapper';
import updateUserRequest from '~~/server/app/formRequests/UpdateUserRequest';


const standardAuthError = getMappedError('Authentication', 'Invalid Credentials')

export default eventHandler(async (event: H3Event) => {
  try {

    const authToken = getCookie(event, 'auth_token')

    if (!authToken) {
      return null
    }

    const auth = await getSanitizedUserBySessionToken(authToken)

    if(!auth) {
      return sendError(event, createError({ statusCode: 401, data: standardAuthError }))
    }

    const data = await updateUserRequest(event)
    const validation = await validateUser(data)

    if (validation.hasErrors === true && validation.errors) {
      const errors = JSON.stringify(Object.fromEntries(validation.errors))
      return sendError(event, createError({ statusCode: 422, data: errors }))
    }

    const userData: IUser = {
      username: data.username,
      name: data.name,
      email: data.email,
      loginType: 'email',
    }

    const user = await updateUser(userData)

    return await makeSession(user, event)
  } catch (error: any) {

    if (error.data instanceof ZodError) {
      return await sendZodErrorResponse(event, error.data)
    }

    return await sendDefaultErrorResponse(event, 'oops', 500, error)
  }
})