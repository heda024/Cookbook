const searchBtn = document.querySelector('.searchbtn')
const searchBar = document.querySelector('.search-bar')
const signOutBtn = document.querySelector('.sign-out-btn')

// Detail elements
const searchResults = document.querySelector('.search-result')
const mealDetailsContent = document.querySelector('.meal-details-content')
const recipeCloseBtn = document.querySelector('.close-details')
const mealItem = document.querySelector('.meal-item')


// Event listeners
signOutBtn.addEventListener('click', () => {
	window.location.href = "login.html"; 
})

searchBtn.addEventListener('click', getSearchResults)

searchResults.addEventListener('click', getMealRecipe)

recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');})


// Get search results 
function getSearchResults() {
	let searchInputText = searchBar.value.trim();
	fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputText}`)
	.then(response => response.json())
	.then(data => {
		let html = '';
		if(data.meals){
			data.meals.forEach(meal => {
				html += 
				`
				<div data-id="${meal.idMeal}" class="meal-item" >
					<div class="meal-image">
						<img src="${meal.strMealThumb}" alt="">
					</div>
					<button class='meal-name-button'>${meal.strMeal}</button>
				</div>`
				searchResults.classList.remove('notFound')
			})
		}else{
			html = "Sorry, no recipes found"
			searchResults.classList.add('notFound')
		
		}
		searchResults.innerHTML = html;
	})
	.catch(error => {
		console.error('Error:', error);
	});
}


// Get recipe for the chosen meal

function getMealRecipe(e){
	e.preventDefault();
	if(e.target.classList.contains('meal-name-button')){
		let mealItemName = e.target.parentElement;
		fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItemName.dataset.id}`)
		.then(response => response.json())
		.then(data => mealRecipeModal(data.meals))
		.catch(error => {
			console.log('Error:', error);
		})
	};
}

// Create modal 
function mealRecipeModal(meal){
	console.log(meal);
	meal = meal[0];
	let html = `
				<h2 class="recipe-title">${meal.strMeal}</h2>
				<p class="recipe-category">${meal.strCategory}</p>
				<div class="recipe-instruct">
					<h3>Instructions:</h3>
					<p>${meal.strInstructions}</p>
				</div>
				<div class="recipe-img">
					<img src="${meal.strMealThumb}" alt="" class="recipe-image">
				</div>
	`;
	
	mealDetailsContent.innerHTML = html;
	mealDetailsContent.parentElement.classList.add('showRecipe')
	mealDetailsContent.parentElement.classList.remove('hideRecipe')

	
}