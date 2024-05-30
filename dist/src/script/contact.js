import { validateContactForm } from "./validateContactForm"

const formName = document.querySelector('.name')
const formEmail = document.querySelector('.email')
const formTitle = document.querySelector('.title')
const formIngredients = document.querySelector('.ingredients')
const formInstructions = document.querySelector('.instructions')
const contactError = document.querySelector('.contact-error')
const signOutBtn = document.querySelector('.sign-out-btn')
const submitBtn = document.querySelector('.submit-button')

// Event listener sign out
signOutBtn.addEventListener('click', () => {
	window.location.href = "index.html"; 
})

function submitRecipe(){
	const {contactErrorStatus} = validateContactForm(
		formName.value.trim(),
		formEmail.value.trim(),
		formTitle.value.trim(),
		formIngredients.value.trim(),
		formInstructions.value.trim(),
		contactError
	);
	if(contactErrorStatus()){
		return
	} 
}

// Sign up
submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	submitRecipe();
});