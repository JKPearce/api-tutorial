const img = document.querySelector("img");
const searchTerm = document.getElementById("search");
const searchButton = document.getElementById("searchBtn");

searchButton.addEventListener("click", () => {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=EgaopUnqXyuyq1n4ENNvKO9fejnLjR33&s=${searchTerm.value}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch((error) => {
        console.log(error);
        img.src = "default.jpg"
    });
});
