const titleInput = document.getElementById("title__input");
const locationInput = document.getElementById("location__input");
const areaInput = document.getElementById("area__input");
const capacityInput = document.getElementById("capacity__input");
const submitButton = document.getElementById("submit__button");
const zooForm = document.getElementById("zooform");

function checkForArea(areaValue) {
  return areaValue !== 0;
}

const editButton = document.getElementById("submit__edit__button");
editButton.addEventListener("click", function(event){
  event.preventDefault();
});

submitButton.addEventListener("click", function(event){
  event.preventDefault();
});

function checkFields() {
  const titleValue = titleInput.value.trim();
  const locationValue = locationInput.value.trim();
  const areaValue = parseInt(areaInput.value.trim()); 
  const capacityValue = capacityInput.value.trim();
  return titleValue && locationValue && checkForArea(areaValue) && capacityValue;
}


submitButton.addEventListener("click", function (event) {
  event.preventDefault();
});
