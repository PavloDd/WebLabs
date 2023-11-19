result = [];

const displaySortedZoos = async () => {
  const sortZoos = await getSortedZoo();
  zoos = sortZoos;
  display(zoos)
}

function SortZoos(){
  displaySortedZoos();
  TotalByArea(showedlist);
}

function TotalByArea(zoos){
  let totalArea = 0;
  zoos.forEach((zoo) => {
    totalArea += parseFloat(zoo.area);
  });
  const totalAreaElement = document.getElementById("total__area");
  totalAreaElement.textContent = `Total area: ${totalArea}`;
}

function SearchZoos() {
  const findZooTitle = document
    .getElementById("find__title")
    .value.toLowercase();
    result = zoos.filter(zoo=>zoo.name.includes(findZooTitle));
    display(result);
    TotalByArea(result);
    showedlist = result;
}

function restore(){
  displayAllZoos();
  TotalByArea(zoos);
  showedlist = zoos;
}