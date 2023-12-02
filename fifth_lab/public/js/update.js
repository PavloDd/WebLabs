const HIDE_CLASSNAME = "hide";
const edit = document.querySelector(".edit");
let globalZooId;


const startEdit = (zooId) => {
  edit.classList.remove(HIDE_CLASSNAME);
  const foundZoo = zoos.find((zoo) => zoo.id === zooId);
  document.getElementById("title__input__edit").value = `${foundZoo.name}`;
  document.getElementById("location__input__edit").value = `${foundZoo.location}`;
  document.getElementById("area__input__edit").value = `${foundZoo.area}`;
  document.getElementById("capacity__input__edit").value = `${foundZoo.capacity}`;
  globalZooId = zooId
};

const saveEdit = () => {
  const titleUpdated = document.getElementById("title__input__edit").value;
  const locationUpdated = document.getElementById("location__input__edit").value;
  const areaUpdated = document.getElementById("area__input__edit").value;
  const capacityUpdated = document.getElementById("capacity__input__edit").value;
  if (areaUpdated <= 0 || locationUpdated==='' || titleUpdated === '' || capacityUpdated === '' || capacityUpdated === '0') {
    alert("Please fill in all fields and ensure the area is not 0.");
    return; // Exit the function if area is 0
  }
  const zoo = {
    id: globalZooId,
    name: titleUpdated,
    location: locationUpdated,
    area: areaUpdated,
    capacity: capacityUpdated 
  };
  console.log()

  editZoo(zoo).then(displayAllZoos);
  edit.classList.add(HIDE_CLASSNAME);
};

const cancelEdit = () => {
    edit.classList.add(HIDE_CLASSNAME);
}
