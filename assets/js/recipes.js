function formSubmitHandler() {
  var ingrQuery = document.querySelector("#ingredientm").value.trim()
  getRecipe(ingrQuery)
}

function getRecipe(query) {
  var requestRecipe = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=' + query;

  fetch(requestRecipe)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data.meals)
      for (var i = 0; i< data.meals.length; i++) {
        console.log(data.meals[i])
        // data.meals[i].idMeal

        // // document.querySelector("#display-recipe").append(data.meals[i].strMeal)
        var image = document.createElement("img")
        image.setAttribute("src", data.meals[i].strMealThumb)
        // document.querySelector("#display-recipe").append(image)
        var mealCard = document.createElement("div")
        mealCard.innerHTML =
          `<div class="card align-center">
                <div class="card-divider align-center">
                  ${data.meals[i].strMeal}
                </div>
                <img src="${data.meals[i].strMealThumb}">
                <div class="card-section">
                  <a class="full-recipe" href= fullrecipe.html?idMeal=${data.meals[i].idMeal}>Click here to review recipe.</a>
                </div>
              </div>`
        document.querySelector("#display-recipe").append(mealCard)
      }
    })
}
document.querySelector("#submit-ingr").addEventListener("click", formSubmitHandler)