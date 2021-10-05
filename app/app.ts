import {Dog} from "../models/dogFacts"

function getDogs(): Promise<Dog[]> {
  
  return fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all')
                .then(res => res.json())
                .then(res => {
                     
                  return res as Dog[];
                })
}

const result = document.getElementById('result')

getDogs()
  .then(dogFacts => {
    for (let i = 0; i < dogFacts.length; i++) {
            let paragraph = document.createElement("p");
            paragraph.textContent  = dogFacts[i].fact.toString();
            result?.appendChild(paragraph);
        }
        })


  //    getDogs()
  // .then(dogFacts => {
  //   result.innerHTML = dogFacts.map(dog => dog.fact).join("<br/>")      
  // })