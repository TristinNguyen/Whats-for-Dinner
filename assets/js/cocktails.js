
function getDrink() {
  var requestDrink = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

  fetch(requestDrink)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.drinks)
      document.querySelector("#display-drink-title").append(data.drinks[0].strDrink)

      var drinkImage = document.createElement("img")
      drinkImage.setAttribute("src", data.drinks[0].strDrinkThumb)
      document.querySelector("#display-drink").append(drinkImage)

    })
}

getDrink();