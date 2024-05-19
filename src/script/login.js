import firebaseConfig from "./firebaseConfig"
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword} from "firebase/auth"

// INITIALIZE FIREBASE
initializeApp(firebaseConfig)

// INITIALIZE AUTHENTICATION
const authService = getAuth()

import { validateSignInForm } from "./validateSignInForm";
import { validateSignUpForm } from "./validateSignUpForm";


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

// SIGN OUT ELEMENT
const signoutBtn = document.querySelector('.sign-out-btn')


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



// SIGN UP USER FUNCTION
function signUpUser(){
	const {signUpErrorStatus} = validateSignUpForm(
		signupEmail.value.trim(),
		signupPassword.value.trim(),
		signupError
	);
	if(signUpErrorStatus()){
		return
	} else {
		const newUser = {
			signupEmail: signupEmail.value.trim(),
			signupPassword: signupPassword.value.trim()
		}
		createUserWithEmailAndPassword(authService, newUser.signupEmail, newUser.signupPassword)
		.then(()=>{
			signupForm.reset();
			signupContainer.style.display = 'none';
			signInForm.style.display = 'flex';
			window.location.href = "homepage.html"; 
		})
		.catch((error) => console.log(error.message))
	}
}

// Sign up
signupBtn.addEventListener('click', (e) => {
	e.preventDefault();
	signUpUser();

});

// HANDLE SIGN OUT

function signOutUser() {
	signOut(authService)
	.then(()=>{
		signupContainer.style.display = 'none';
		signInForm.style.display = 'flex';
		window.location.href = "login.html";
	})
	.catch((error) => console.log(error.message))
}

signoutBtn.addEventListener('click', (e)=>{
	e.preventDefault();
	signOutUser();
})

// HANDLE SIGN IN

function signInUser(){
	const {signInFormStatus} = validateSignInForm(
		emailInput.value, 
		passwordInput.value, 
		emailError, 
		passwordError
		);
		if(signInFormStatus()){
			return
		} else {
			const email = emailInput.value.trim();
			const password = passwordInput.value.trim();
			signInWithEmailAndPassword(authService, email, password)
			.then(()=>{
				signInForm.reset();
				window.location.href = "homepage.html"; 
			})
			.catch((error) => {
				submissionError.textContent = 'something went wrong'
			})
	}
}

signInButton.addEventListener('click', (e)=>{
	e.preventDefault();
	signInUser();
})

export {signOutUser}
