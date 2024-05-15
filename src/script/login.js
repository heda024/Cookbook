import { validateSignInForm } from "./validateSignInForm.js";
import { validateSignUpForm } from "./validateSignUpForm.js";

// SIGN IN FORM ELEMENTS
const emailInput = document.querySelector('.email-input')
const passwordInput = document.querySelector('.password-input')
const signInButton = document.querySelector('.loginbtn')
const emailError = document.querySelector('.email-error')
const passwordError = document.querySelector('.password-error')
const signInForm = document.querySelector('.login')
const submissionError = document.querySelector('.submission-error')

// SIGN UP FORM ELEMENTS
const signupEmail = document.querySelector('.signup-email')
const signupPassword = document.querySelector('.signup-password')
const signupBtn = document.querySelector('.signup-btn')
const signupError = document.querySelector('.signup-error')
const signupForm = document.querySelector('.sign-up-form')
const closeSignup = document.querySelector('.sign-up-form-close')
const openSignup = document.querySelector('.sign-up-form-open')
const signupContainer = document.querySelector('.sign-up-form-container')

// Sign in 
signInButton.addEventListener('click', (e)=>{
	e.preventDefault();

	validateSignInForm(
		emailInput.value, 
		passwordInput.value, 
		emailError, 
		passwordError
		);

});

// Sign up
signupBtn.addEventListener('click', (e) => {
	e.preventDefault();

	validateSignUpForm(
		signupEmail.value,
		signupPassword.value,
		signupError
	);

});


// Open sign up
openSignup.addEventListener('click', (e) => {
	e.preventDefault();
	signupContainer.style.display = 'flex';
	signInForm.style.display = 'none';

})	


// Close sign up
closeSignup.addEventListener('click', () => {
	signupContainer.style.display = 'none';
	signInForm.style.display = 'flex';
})

