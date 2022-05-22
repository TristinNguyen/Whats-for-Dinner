// //set vars
// var saveBtn = $(".button");

// function saveRecipe() {
//     var recipe = $(".footer");
//     localStorage.setItem(key,JSON.stringify(recipe));
// }
var savedRecipes = document.querySelector(".savedrecipes")
var savedDrink = document.querySelector('.randomDrink')
const recipe = {

}
// window.localStorage.setItem('recipe', JSON.stringify(person));
// window.localStorage.getItem('savedrecipe', JSON.stringify(person));
var favoriteMeals = JSON.parse(window.localStorage.getItem('favoriteMeals'));
console.log(savedRecipes)

for (var i = 0; i<favoriteMeals.length; i++) {
    var imgEl = document.createElement('img')
    imgEl.setAttribute('src', favoriteMeals[i].imgElSrc)
    savedRecipes.appendChild(imgEl)
    var cookingInstructionsEl = document.createElement('p')
    cookingInstructionsEl.textContent = favoriteMeals[i].cookingInstructions
    savedRecipes.appendChild(cookingInstructionsEl)
    var videoInfoEl = document.createElement('a') 
    videoInfoEl.setAttribute('href', favoriteMeals[i].videoInfo)
    videoInfoEl.textContent = "click link"
    savedRecipes.appendChild(videoInfoEl)
}

var favoriteDrinks = JSON.parse(window.localStorage.getItem('favoriteDrinks'));
console.log(savedDrink)

for (var i = 0; i<favoriteDrinks.length; i++) {
    var drinkImgEl = document.createElement('img')
    drinkImgEl.setAttribute('src', favoriteDrinks[i].imgElSrc)
    savedDrink.appendChild(drinkImgEl)
    var drinkName = document.createElement('h2')
    drinkName.textContent = favoriteDrinks[i].drinkTitle
    savedDrink.appendChild(drinkName)
}