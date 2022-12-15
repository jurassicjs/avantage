type FormValidation = {
 hasErrors: boolean
 errors?: Map<string, { message: InputValidation; }>
 loggedIn?: boolean
};

type otpValidation = {
 hasErrors: boolean
 errors?: Map<string, { message: InputValidation; }>
 isVerified?: boolean
};

type FormErrors = {
 field: string
 message: InputValidation
}