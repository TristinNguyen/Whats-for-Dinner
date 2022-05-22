var urlParam = document.location.search.split("=").pop()
console.log(urlParam)

function fullRecipe() {
    var requestFullRecipe = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + urlParam

    fetch (requestFullRecipe)
        .then(function (response) {
        return response.json();
    })
        .then(function (data){
        console.log(data)

            var recipeImage = document.createElement("img")
            recipeImage.setAttribute("src", data.meals[0].strMealThumb)
            document.querySelector("#instructions").append(recipeImage)

            var writtenRecipe = document.createElement("p")
            writtenRecipe.textContent=data.meals[0].strInstructions
            document.querySelector("#instructions").append(writtenRecipe)

            var recipeLink = document.createElement("a")
            recipeLink.setAttribute("href", data.meals[0].strYoutube)
            recipeLink.textContent= "Video instructions here"
            document.querySelector("#instructions").append(recipeLink)
            
            const style = document.createElement('style');
            style.innerHTML = `
                .recipe {
                    background-color: gray;
                    color: white;
                }
                `;
            document.head.appendChild(style);
        
    })
}



function saveMeal() {
    var recipeInfoEl = document.getElementsByClassName("recipe")
    console.log(recipeInfoEl)
    var mealTitleEl = document.getElementById("display-meal-title");
    console.log(mealTitleEl)
    var mealInstructions = document.getElementById("instructions")
    var mealPicEl = document.getElementById("instructions");
    
    var mealTitle = mealTitleEl.innerHTML;
    console.log("meal Title " + mealTitle)
    var imgElSrc = mealInstructions.children[0].getAttribute("src");
    var cookingInstructions =  mealInstructions.children[1].innerHTML;
    var videoInfo = mealInstructions.children[2].getAttribute("href");
    console.log("img el source " + imgElSrc)
    var currentlySavedMealLi = JSON.parse(localStorage.getItem("favoriteMeals"));
    if(!currentlySavedMealLi) {
      var newMealLi = []
      var newMeal = {mealTitle, imgElSrc, cookingInstructions, videoInfo}
      console.log(newMeal)
      newMealLi.push(newMeal)
      localStorage.setItem('favoriteMeals',JSON.stringify(newMealLi));
    } else{
      var newMeal = {mealTitle, imgElSrc, cookingInstructions, videoInfo}
      currentlySavedMealLi.push(newMeal)
      localStorage.setItem('favoriteMeals',JSON.stringify(currentlySavedMealLi));
    }
    
    console.log('retrieveItem: ', JSON.parse(localStorage.getItem('favoriteMeals')));
}
fullRecipe();
document.querySelector("#save").addEventListener("click",saveMeal);