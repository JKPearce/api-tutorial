const img = document.querySelector("img");
const searchTerm = document.getElementById("search");
const searchButton = document.getElementById("searchBtn");

async function getGif(query) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=EgaopUnqXyuyq1n4ENNvKO9fejnLjR33&s=${query}`,
      { mode: "cors" }
    );
    const gifData = await response.json();
    img.src = gifData.data.images.original.url;
  } catch (error) {
    console.log(error);
    img.src = "default.jpg";
  }
}

searchButton.addEventListener("click", () => {
  getGif(searchTerm.value);
});

getGif("cats");
