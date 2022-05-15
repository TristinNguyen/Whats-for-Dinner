
var query = "Salmon"

function getRecipe() {
    var requestRecipe = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=' + query;

    fetch(requestRecipe)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data)
            // for (var i=0; i < data.length; i++){
            // }
            
        })
}
getRecipe();

// Render Recipe//