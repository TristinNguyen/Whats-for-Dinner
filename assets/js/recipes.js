var query = "Salmon"

function getRecipe() {
    var requestRecipe = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=' + query;

    fetch(requestRecipe)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data.meals)
            for (var i = 0; i < data.meals.length; i++) {
                console.log(data.meals[i])
                document.querySelector("#display-recipe").append(data.meals[i].idMeal)
                var image = document.createElement("img")
                image.setAttribute("src", data.meals[i].strMealThumb)
                document.querySelector("#display-recipe").append(image)
            }

        })
}
getRecipe();