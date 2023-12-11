
let zoos = [];
let showedlist = zoos;

const displayAllZoos = async () =>{
  const allZoos = await getAllZoos();
  zoos = allZoos;
  showedlist = zoos;
  console.log(zoos)
  display(zoos);
  TotalByArea(showedlist);
}


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
    name: titleInput,
    location: locationInput,
    area: areaInput,
    capacity: capacityInput,
  };
  console.log(zoo)
  postZoo(zoo).then((allZoos)=>{
    zoos = allZoos;
    showedlist = zoos;
    console.log(allZoos)
    display(zoos);
    TotalByArea(showedlist);
  });
  display(zoos);
  showedlist = zoos;
  TotalByArea(showedlist);

  titleInput.value = "";
  locationInput.value = "";
  areaInput.value = "";
  capacityInput.value = "";
};


function zooDelete(zooId){
  deleteZoo(zooId).then(displayAllZoos);
  TotalByArea(showedlist);
}
displayAllZoos();

