
const validateContactForm = (formName, formEmail, formTitle, formIngredients, formInstructions, contactError) => {
	let errorStatus = false;
	if(!formName || !formEmail || !formTitle || !formIngredients || !formInstructions){
		errorStatus = true; 
		contactError.style.visibility = 'visible'
		contactError.textContent = 'Please fill out all the fields ⚠️'
	} else {
		errorStatus = false; 
		contactError.style.visibility = 'hidden'
		contactError.textContent = ''
	}

	const contactErrorStatus = () => {
		return errorStatus;
	}

	return {contactErrorStatus}
}

export {validateContactForm}