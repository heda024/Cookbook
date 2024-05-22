const savedRedicpesBtn = document.querySelector('.saved-recipes')
const searchBtn = document.querySelector('.searchbtn')
const searchBar = document.querySelector('.search-bar')

// Detail elements
const searchResults = document.querySelector('.search-result')
const mealDetailsContent = document.querySelector('.meal-details-content')
const recipeCloseBtn = document.querySelector('.close-details')


// Event listeners
savedRedicpesBtn.addEventListener('click', ()=>{
	window.location.href = "saved-recipes.html";
})

searchBtn.addEventListener('click', getSearchResults)


// Get search results 
function getSearchResults() {
	let searchInputText = searchBar.value.trim();
	fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputText}`)
	.then(response => response.json())
	.then(data => {
		let html = '';
		if(data.meals){
			data.meals.forEach(meal => {
				html += `
				<div class="meal-item" data-id="${meal.idMeal}">
					<div class="meal-image">
						<img src="${meal.strMealThumb}" alt="">
					</div>
					<div class="meal-links">
						<div class="meal-name">
							<a href="">${meal.strMeal}</a>
						</div>
						<button class="save-meal">
							<img src="../src/assets/images/bookmark.png" alt="">
						</button>
					</div>
				</div>`
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
