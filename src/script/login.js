import { validateSignInForm } from "./validateSignInForm.js";


const emailInput = document.querySelector('.email-input')
const passwordInput = document.querySelector('.password-input')
const signInButton = document.querySelector('.loginbtn')
const emailError = document.querySelector('.email-error')
const passwordError = document.querySelector('.password-error')
const signInForm = document.querySelector('.login')
const submissionError = document.querySelector('.submission-error')

signInButton.addEventListener('click', (e)=>{
	e.preventDefault();

	validateSignInForm(
		emailInput.value, 
		passwordInput.value, 
		emailError, 
		passwordError
		);

});

