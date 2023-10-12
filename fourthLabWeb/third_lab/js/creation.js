const zoos = [];
let showedlist = zoos;


const saveZoo = () => {
  const zooList = document.getElementById("zoolist");
  const titleInput = document.getElementById("title__input").value;
  const locationInput = document.getElementById("location__input").value;
  const areaInput = parseFloat(
    document.getElementById("area__input").value
  );
  const capacityInput = document.getElementById("capacity__input").value;

  if (areaInput <= 0 || locationInput ==='' || titleInput === '' || capacityInput === '' || capacityInput === '0') {
    alert("Please fill in all fields and ensure the area is not 0.");
    return; // Exit the function if area is 0
  }

  const zoo = {
    title: titleInput,
    location: locationInput,
    area: areaInput,
    capacity: capacityInput,
  };
  zoos.push(zoo);
  const zooItem = document.createElement("div");
  zooItem.classList.add("zoo-item");
  zooItem.innerHTML = `
      <div class="card__body">
        <img src="./zoo.jpeg" >
        <h1 class="card__title">${zoo.title}</h1>
        <h2 class="card__zoo__location">Zoo location: ${zoo.location}</h2>
        <h2 class="card__zoo__area">Zoo area: ${zoo.area}</h2>
        <h2 class="card__zoo__capacity">Zoo capacity: ${zoo.capacity}</h2>
        <button type="button" class="edit__button" onclick="editZoo(this.parentElement)">Edit</button>
      </div>
    `;
  zooList.appendChild(zooItem);
  TotalByArea(zoos);
  showedlist = zoos;

  titleInput.value = "";
  locationInput.value = "";
  areaInput.value = "";
  capacityInput.value = "";

  restore();
};

function display(zoos) {
  const zooList = document.getElementById("zoolist");
  zooList.innerHTML = "";
  zoos.forEach((item) => {
    const zooItem = document.createElement("div");
    zooItem.classList.add("zoo-item");
    zooItem.innerHTML = `
    <div class="card__body">
      <img src="./zoo.jpeg" >
      <h1 class="card__title">${item.title}</h1>
      <h2 class="card__zoo__location">Zoo location: ${item.location}</h2>
      <h2 class="card__zoo__area">Zoo area: ${item.area}</h2>
      <h2 class="card__zoo__capacity">Zoo capacity: ${item.capacity}</h2>
      <button type="button" class="edit__button" onclick="editZoo(this.parentElement)">Edit</button>
    </div>
  `;
    zooList.appendChild(zooItem);
  });
}

function deleteZoo(element) {
  const titleInput = element.querySelector(".card__title");
  const title = titleInput.textContent;
  const locationInput = element.querySelector(".card__zoo__location");
  const location = locationInput.textContent;
  const areaInput = element.querySelector(".card__zoo__area");
  const area = areaInput.textContent.split(": ");
  zoos.forEach((zoo, index) => {
    console.log(
      zoo.title === title &&
        zoo.location === location &&
        zoo.area === parseFloat(area[1])
    );
    if (
      zoo.title === title &&
      zoo.location === location &&
      zoo.area === parseFloat(area[1])
    ) {
      zoos.splice(index, 1);
      element.remove();
    }
  });
  TotalByArea(zoos);
}


