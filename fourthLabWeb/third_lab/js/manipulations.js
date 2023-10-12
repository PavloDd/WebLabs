function SortZoos(list) {
  const zoosList = document.getElementById("zoolist");
  zoosList.innerHTML = "";
  list.sort((a, b) => a.area - b.area);
  list.forEach((zoo) => {
    const zooItem = document.createElement("div");
    zooItem.classList.add("zoo-item");
    zooItem.innerHTML = `
      <div class="card__body">
        <img src="./zoo.jpeg">
        <h1 class="card__title">${zoo.title}</h1>
        <h2 class="card__zoo__location">Zoo location: ${zoo.location}</h2>
        <h2 class="card__zoo__area">Zoo area: ${zoo.area}</h2>
        <h2 class="card__zoo__capacity">Zoo capacity: ${zoo.capacity}</h2>
        <button type="button" class="edit__button" onclick="editZoo(this.parentElement)">Edit</button>
      </div>
    `;

    zoosList.appendChild(zooItem);
  });
  TotalByArea(list);
  console.log(showedlist);
  console.log(list);
}

function TotalByArea(zoos) {
  const totalArea = zoos.reduce((totalArea, zoo) => totalArea + zoo.area, 0);
  console.log(totalArea);
  const totalAreaElement = document.getElementById("total__area");
  totalAreaElement.textContent = `Total Area: ${totalArea}`;
}


function SearchZoos() {
  const findZoo = document
    .getElementById("find__title")
    .value.toLowerCase();
  const result = showedlist.filter((zoo) => {
    return zoo.title.toLowerCase().includes(findZoo);
  });
  showedlist = result;
  display(showedlist);
  console.log(showedlist);
  TotalByArea(showedlist);
}

function restore(){
  display(zoos);
  TotalByArea(zoos);
  showedlist = zoos;
}
