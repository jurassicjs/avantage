import { User } from "@prisma/client";

export interface IUserSession {
    authToken: string;
    user: User
    sessionId: number
}
