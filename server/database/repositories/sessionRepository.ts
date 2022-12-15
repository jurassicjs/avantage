import prisma from "~/server/database/client";
import { IUserSession } from '~~/types/ISession';
import { User } from '@prisma/client';

export async function createSession(authToken: string, user: User): Promise<IUserSession> {
  if (!authToken) {
    throw Error('missing auth token for session')
  }
  
 const session = await prisma.session.create({
    data: {
      userId: user.id,
      authToken: authToken
    },
  })

  return {user: user, authToken: authToken, sessionId: session.id}
}

async function getSessionByAuthToken(authToken: string) {
  const session =  await prisma.session.findUnique({
    where: {
      authToken: authToken,
    }
  })

  return session
}

export async function getUserByAuthToken(authToken: string): Promise<User> {
  const session = await getSessionByAuthToken(authToken)
  const user =  await prisma.session.findUnique({
    where: {
      id: session?.id,
    }
  }).user()

  if(user === null) {
    throw new Error(`no user found for authToken ${authToken}`)
  }

  return user
}
