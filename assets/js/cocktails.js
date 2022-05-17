var btn = document.getElementById("#drink");
btn.addEventListener("click", function getRecipe(query) {
    var requestDrink = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
     console.log(data)
     fetch(requestDrink)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // console.log(data.meals)
        for (var i = 0; i< data.drinks.length; i++) {
          console.log(data.drinkss[i])
          var image = document.createElement("img")
          image.setAttribute("src", data.drinks[i].strDrink)
          // document.querySelector("#display-recipe").append(image)
          var drinkCard = document.createElement("div")
          document.querySelector("#name").append(drinkCard)
        }
})
})
