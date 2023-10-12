const HIDE_CLASSNAME = "hide";

const edit = document.querySelector(".edit");

let currentElement;
const editZoo = (element) => {
  edit.classList.remove(HIDE_CLASSNAME);
  currentElement = element;
  const titleElement = currentElement.querySelector(".card__title").textContent;
  const locationElement = currentElement
    .querySelector(".card__zoo__location")
    .textContent.split(": ");
  const areaElement = currentElement
    .querySelector(".card__zoo__area")
    .textContent.split(": ");
  const capacityElement = currentElement
    .querySelector(".card__zoo__capacity")
    .textContent.split(": ");
  document.getElementById("title__input__edit").value = `${titleElement}`;
  document.getElementById("location__input__edit").value = `${locationElement[1]}`;
  document.getElementById("area__input__edit").value = `${areaElement[1]}`;
  document.getElementById("capacity__input__edit").value = `${capacityElement[1]}`;
};

const saveEdit = () => {
  const titleUpdated = document.getElementById("title__input__edit").value;
  const locationUpdated = document.getElementById("location__input__edit").value;
  const areaUpdated = document.getElementById("area__input__edit").value;
  const capacityUpdated = document.getElementById("capacity__input__edit").value;

  const titleElement = currentElement.querySelector(".card__title");
  const locationElement = currentElement.querySelector(".card__zoo__location");
  const areaElement = currentElement.querySelector(".card__zoo__area");
  const capacityElement = currentElement.querySelector(".card__zoo__capacity");

  const title = titleElement.textContent;
  const location = locationElement.textContent.split(": ");
  const area = areaElement.textContent.split(": ");

  if (areaUpdated <= 0 || locationUpdated==='' || titleUpdated === '' || capacityUpdated === '' || capacityUpdated === '0') {
    alert("Please fill in all fields and ensure the area is not 0.");
    return; // Exit the function if area is 0
  }

  titleElement.textContent = titleUpdated;
  locationElement.textContent = "Zoo location: " + locationUpdated;
  areaElement.textContent = "Zoo area: " + areaUpdated;
  capacityElement.textContent = "Zoo capacity: " + capacityUpdated;

  for (let i = 0; i < zoos.length; i++) {
    if (
      zoos[i].title === title &&
      zoos[i].location === location[1] &&
      zoos[i].area === parseFloat(area[1])
    ) {
      zoos[i].title = titleUpdated;
      zoos[i].location = locationUpdated;
      zoos[i].area = parseFloat(areaUpdated);
      zoos[i].capacity = capacityUpdated;
    }
  }
  edit.classList.add(HIDE_CLASSNAME);
  TotalByArea(zoos);
};
const cancelEdit = () => {
    edit.classList.add(HIDE_CLASSNAME);

}
