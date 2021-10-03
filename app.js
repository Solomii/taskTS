function getDogs() {
    // For now, consider the data is stored on a static `users.json` file
    return fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all')
        // the JSON body is taken from the response
        .then(function (res) { return res.json(); })
        .then(function (res) {
        return res;
    });
}
var result = document.getElementById('result');
getDogs()
    .then(function (dog) {
    result.innerHTML = dog.map(function (dog) { return dog.fact; }).toString();
});
