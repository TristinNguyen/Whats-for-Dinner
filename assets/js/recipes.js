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
<<<<<<< HEAD
      for (var i = 0; i < data.meals.length; i++) {
=======
      for (var i = 0; i< data.meals.length; i++) {
>>>>>>> 89b9f42f4329ed8d966131a3a92cd676150ac035
        console.log(data.meals[i])
        // data.meals[i].idMeal

        // // document.querySelector("#display-recipe").append(data.meals[i].strMeal)
        var image = document.createElement("img")
        image.setAttribute("src", data.meals[i].strMealThumb)
        // document.querySelector("#display-recipe").append(image)
        var mealCard = document.createElement("div")
<<<<<<< HEAD
          mealCard.innerHTML =
=======
        mealCard.innerHTML =
>>>>>>> 89b9f42f4329ed8d966131a3a92cd676150ac035
          `<div class="card" style="width: 500px;">
                <div class="card-divider">
                  ${data.meals[i].strMeal}
                </div>
                <img src="${data.meals[i].strMealThumb}">
                <div class="card-section">
                  <a href= fullrecipe.html>Click here to review recipe.</a>
                </div>
              </div>`
<<<<<<< HEAD
          document.querySelector("#display-recipe").append(mealCard)

      }

=======
        document.querySelector("#display-recipe").append(mealCard)
      }
>>>>>>> 89b9f42f4329ed8d966131a3a92cd676150ac035
    })
}
document.querySelector("#submit-ingr").addEventListener("click", formSubmitHandler)