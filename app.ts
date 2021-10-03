

interface Dog {
  fact: String;
}

function getDogs(): Promise<Dog[]> {
        // For now, consider the data is stored on a static `users.json` file
  return fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all')
                // the JSON body is taken from the response
                .then(res => res.json())
                .then(res => {
                  return res as Dog[];
                })
}
const result = document.getElementById('result')
getDogs()
        .then(dog => {
                result.innerHTML = dog.map(dog =>dog.fact).toString()
        })