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

            // for (var i=0; i< data.length; i++) {
            // console.log(data.meals[i])

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
            
        // }
    })
}

fullRecipe();