function display(zoos) {
  const zooList = document.getElementById("zoolist");
  zooList.innerHTML = "";
  zoos.forEach((item) => {
    const zooItem = document.createElement("div");
    zooItem.classList.add("zoo-item");
    zooItem.innerHTML = `
    <div class="card__body">
      <h1 class="card__title">${item.name}</h1>
      <h2 class="card__zoo__location">Zoo location: ${item.location}</h2>
      <h2 class="card__zoo__area">Zoo area: ${item.area}</h2>
      <h2 class="card__zoo__capacity">Zoo capacity: ${item.capacity}</h2>
      <button type="button" class="edit__button" onclick="startEdit(${item.id})">Edit</button>
    </div>
  `;
    zooList.appendChild(zooItem);
  });
}
