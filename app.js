"use strict";
exports.__esModule = true;
function getDogs() {
    return fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all')
        .then(function (res) { return res.json(); })
        .then(function (res) {
        return res;
    });
}
var result = document.getElementById('result');
getDogs()
    .then(function (dogFacts) {
    for (var i = 0; i < dogFacts.length; i++) {
        var paragraph = document.createElement("p");
        paragraph.textContent = dogFacts[i].fact.toString();
        result === null || result === void 0 ? void 0 : result.appendChild(paragraph);
    }
});
//    getDogs()
// .then(dogFacts => {
//   result.innerHTML = dogFacts.map(dog => dog.fact).join("<br/>")      
// })
