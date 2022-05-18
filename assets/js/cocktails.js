var save = document.getElementById("#save");

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

function saveDrink() {
    var saveName = document.getElementById("#movetofavs");
    var savePic = document.getElementById("#movetofavs");
    saveName.setAttribute("src", data.drinks[0].strDrink);
    savePic.setAttribute("src", data.drinks[0].strDrinkThumb);
    localStorage.setItem('saveName, savePic',JSON.stringify(saveName,savePic));
    var retrieveItem = JSON.parse(localStorage.getItem(saveName,savePic));
    console.log('retrieveItem: ', retrieveItem)
}
saveDrink();

document.querySelector("#save").addEventListener("click",saveDrink)