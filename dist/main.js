const accesKey = "VgRy61uKAIHYmM1MuVqtyBSi6B4uypxErOmOP2s2OhM";
const endPoint = "https://api.unsplash.com/search/photos";

async function getImages(query) {
  let response = await fetch(
    endPoint + "?query=" + query + "&client_id=" + accesKey
  );

  let jsonResponse = await response.json();
  let imagesList = await jsonResponse.results;

  function createImages(imagesList) {
    let count = 0;
    for (let i = 0; i < imagesList.length; i++) {
      if (count >= 10) {
        break;
      }
      const image = document.createElement("img");
      image.src = imagesList[i].urls.thumb;
      document.body.appendChild(image);
      count++;
    }
  }
  createImages(imagesList);
}
getImages("Argentina");