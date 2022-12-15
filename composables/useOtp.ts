export async function verifyOtp(otp: number|undefined) {
    try {
        const isVerified = await $fetch('/api/auth/verifyOtp', { method: 'POST', body: { otp } })

        if (!isVerified) {
            throw Error('invalid otp, try resending')
        }

        return { hasErrors: false, isVerified: isVerified }
    } catch (error: any) {
        return useErrorMapper(error.data.data)
    }
}