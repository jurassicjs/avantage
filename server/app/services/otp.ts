import { createStorage } from 'unstorage'
const storage = createStorage()

export const createOtp = async (userId: number): Promise<number> => {
    const otp = Math.floor(100000 + Math.random() * 900000)

    await storage.setItem(`otp:${userId}`, otp)

    return otp
}

export const verifyOtp = async (userId: number, otp: number) => {

    const key = `otp:${userId}`

    console.log('verify-key', key)
    
    const storedOtp = await storage.getItem(key)

    if (otp === storedOtp) {
        return true
    }

    return false
}