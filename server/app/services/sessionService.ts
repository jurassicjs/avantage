import { sanitizeUserForFrontend } from '~~/server/app/services/userService';
import { H3Event } from "h3"
import { createSession, getUserByAuthToken  } from "~~/server/database/repositories/sessionRepository"
import { v4 as uuidv4 } from 'uuid'
import { User } from '@prisma/client';
import sendDefaultErrorResponse from '~/server/app/errors/responses/DefaultErrorsResponse';
import { IUserSanitized } from '~~/types/IUser';

export async function makeSession(user: User, event: H3Event): Promise<IUserSanitized | undefined> {
    const authToken = uuidv4().replaceAll('-', '')
    const session = await createSession(authToken, user )
    const userId = session.user.id

    if (userId) {
        setCookie(event, 'auth_token', authToken, { path: '/', httpOnly: true })
        return getSanitizedUserBySessionToken(authToken)
    }

    throw Error('Error Creating Session')
}

export async function getUserByEvent(event: H3Event) {
    const authToken = getCookie(event, 'auth_token')

    if (authToken === undefined) {
        return await sendDefaultErrorResponse(event, 'Unauthenticated', 403, 'Unauthenticated')
    }

    return await getSanitizedUserBySessionToken(authToken)

}

export async function getSanitizedUserBySessionToken(authToken: string): Promise<IUserSanitized> {
    const user = await getUserByAuthToken(authToken)

    return sanitizeUserForFrontend(user)
}


