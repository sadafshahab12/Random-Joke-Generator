const newJokeBtn = document.querySelector(".new-joke");
const jokeAPIURL = `https://v2.jokeapi.dev/joke/Programming`;
const jokeContainer = document.querySelector(".jokes");

function generateJokes() {
  fetch(jokeAPIURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error`joke not found`();
      }
      return response.json();
    })
    .then((data) => {
      jokeContainer.innerHTML = `<p>${data.joke}</p>`;
    })
    .catch((error) => {
      jokeContainer.innerHTML = `Error: ${error.message}`;
    });
}
generateJokes();

newJokeBtn.addEventListener("click" , ()=>{
  window.location.reload();
  
})
