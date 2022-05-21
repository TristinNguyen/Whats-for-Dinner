var save = document.getElementById("#save");

function getDrink() {
  var requestDrink = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

  fetch(requestDrink)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.drinks)
      document.querySelector("#display-drink-title").textContent = data.drinks[0].strDrink

      var drinkImage = document.createElement("img")
      drinkImage.setAttribute("src", data.drinks[0].strDrinkThumb)
      document.querySelector("#display-drink").append(drinkImage)

    })
}

getDrink();

function saveDrink() {
    var drinkTitleEl = document.getElementById("display-drink-title");
    var drinkPicEl = document.getElementById("display-drink");
    var drinkTitle = drinkTitleEl.innerHTML;
    console.log(drinkTitle);
    var imgElSrc = drinkPicEl.children[0].src;
    var currentlySavedDrinkLi = JSON.parse(localStorage.getItem("favoriteDrinks"));
    console.log(currentlySavedDrinkLi)
    if(!currentlySavedDrinkLi) {
      var newDrinkLi = []
      var newDrink = {drinkTitle, imgElSrc}
      newDrinkLi.push(newDrink)
      localStorage.setItem('favoriteDrinks',JSON.stringify(newDrinkLi));
    } else{
      var newDrink = {drinkTitle, imgElSrc}
      currentlySavedDrinkLi.push(newDrink)
      localStorage.setItem('favoriteDrinks',JSON.stringify(currentlySavedDrinkLi));
    }
    
    console.log('retrieveItem: ', JSON.parse(localStorage.getItem('favoriteDrinks')));
}

document.querySelector("#save").addEventListener("click",saveDrink)