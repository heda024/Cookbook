
const validateSignUpForm = (signupEmail, signupPassword, signupError) => {
	let errorStatus = false;
	if(!signupEmail || !signupPassword){
		errorStatus = true; 
		signupError.style.visibility = 'visible'
		signupError.textContent = 'Please fill out all the fields ⚠️'
	} else {
		errorStatus = false; 
		signupError.style.visibility = 'hidden'
		signupError.textContent = ''
	}

	const signUpErrorStatus = () => {
		return errorStatus;
	}

	return {signUpErrorStatus}
}

export {validateSignUpForm}