import type { ISubscription } from '~/types/ISubscription';

export interface IUser {
  id?: number
  username: string
  name: string
  loginType?: string
  password: string
  email: string
  avatarUrl?: string
  subscription?: ISubscription | null
  stripeCustomerId?: string | null
}

export interface IUserSanitized {
  id: number
  username: string
  name: string
  email: string
}



