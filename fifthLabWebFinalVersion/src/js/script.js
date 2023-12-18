function sortZoosByCostDescending() {
  const zooInfoArray = Array.from(
    document.getElementsByClassName("zooInfo")
  );

  zooInfoArray.sort((a, b) => {
    const costA = parseFloat(a.querySelector(".costValue").textContent);
    const costB = parseFloat(b.querySelector(".costValue").textContent);
    return costB - costA;
  });

  const parent = zooInfoArray[0].parentElement;
  while (parent.firstChild !== parent.children[0]) {
    parent.removeChild(parent.firstChild);
  }

  zooInfoArray.forEach((zoo) => {
    parent.appendChild(zoo);
  });
}

function sortZoosByOriginalState() {
  const zooInfoArray = Array.from(
    document.getElementsByClassName("zooInfo")
  );

  zooInfoArray.sort((a, b) => {
    const nameA = a.querySelector("h2").textContent;
    const nameB = b.querySelector("h2").textContent;
    return nameA.localeCompare(nameB);
  });

  const parent = zooInfoArray[0].parentElement;
  while (parent.firstChild !== parent.children[0]) {
    parent.removeChild(parent.firstChild);
  }

  zooInfoArray.forEach((plate) => {
    parent.appendChild(plate);
  });
}

function switcherFunction(element) {
  const parent = element.parentElement;
  const currentJustifyContent = window.getComputedStyle(parent).justifyContent;

  if (currentJustifyContent === "flex-start") {
    parent.style.justifyContent = "flex-end";
    sortZoosByCostDescending();
  } else {
    parent.style.justifyContent = "flex-start";
    sortZoosByOriginalState();
  }
}
function zooCreation() {
  window.location.href = "/creationPage.html"
}

document.addEventListener("DOMContentLoaded", function () {
  const rightSection = document.querySelector(".rightSection");

  if (rightSection) {
    // Fetch data from your database using the GET method
    fetch('http://localhost:3000/zoos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // 'data' contains the results from the GET request
        console.log('Data fetched:', data);

        // Loop through the fetched data and create elements
        data.forEach(zoo => {
          const { id, title, description, cost, location } = zoo;
          const newZooDiv = document.createElement("div");
          newZooDiv.classList.add("zooInfo");
          newZooDiv.setAttribute("data-zoo-id", id);
          newZooDiv.innerHTML = `
            <h2>${title}</h2>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Cost($):</strong><span class="costValue">${cost}</span>$</p>
            <p><strong>Zoo location:</strong> ${location}</p>
            <div class="zooInfoButtons">
              <button class="deleteButton" onclick="deleteButton(${id})">Delete</button>
              <button class="editButton" onclick="editButton(${id}, '${title}', '${description}', ${cost}, '${location}')">Edit</button>
            </div>
          `;

          rightSection.appendChild(newZooDiv);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  } else {
    console.error("Div not found in loaded HTML");
  }
});

function addZoo() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const cost = document.getElementById('cost').value;
  const location = document.getElementById('location').value;

  const zooData = {
    title,
    description,
    cost,
    location,
  };

  if (title == "" || cost == "") {
    alert("Title and cost can't be nothing")
  }

  fetch('http://localhost:3000/insert-zoo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(zooData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Data inserted:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function totalCount() {
  const zooInfoArray = Array.from(
    document.getElementsByClassName("costValue")
  );
  let totalCost = 0.0;

  zooInfoArray.forEach((zoo) => {
    const cost = parseFloat(zoo.textContent);
    if (!isNaN(cost)) {
      totalCost += cost;
    }
  });

  const totalExpensesDiv = document.querySelector(".totalExpenses");
  totalExpensesDiv.textContent = `Total expenses: $${totalCost.toFixed(2)}`;
}

function searchFunc() {
  const searchBar = document.querySelector(".searchBar");
  const zooInfoArray = Array.from(
    document.getElementsByClassName("zooInfo")
  );

  const lowercaseSearchBar = searchBar.value.toLowerCase();

  zooInfoArray.forEach((zooInfo) => {
    const h2Element = zooInfo.querySelector("h2");
    const h2Content = h2Element.textContent.toLowerCase();

    if (!h2Content.includes(lowercaseSearchBar)) {
      zooInfo.style.display = "none";
    } else {
      zooInfo.style.display = "flex";
    }
  });
}

function clearFunc() {
  const searchBar = document.querySelector(".searchBar");
  const zooInfoArray = Array.from(
    document.getElementsByClassName("zooInfo")
  );
  searchBar.value = "";

  zooInfoArray.forEach((zooInfo) => {
    zooInfo.style.display = "flex";
  });
}

function deleteButton(zooId) {
  const confirmDelete = confirm('Are you sure you want to delete this zoo?');
  if (!confirmDelete) {
    return;
  }

  fetch(`http://localhost:3000/delete-zoo/${zooId}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const zooDiv = document.querySelector(`[data-zoo-id="${zooId}"]`);
      if (plateDiv) {
        zooDiv.remove();
      }
      return response.json();
    })
    .then(data => {
      console.log('zoo deleted:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function editButton(zooId, title, description, cost, location) {
  sessionStorage.setItem("editZooId", zooId);
  sessionStorage.setItem("editTitle", title);
  sessionStorage.setItem("editDescription", description);
  sessionStorage.setItem("editCost", cost);
  sessionStorage.setItem("editLocation", location);

  window.location.href = "editPage.html";
}

function saveEdits() {
  const zooId = sessionStorage.getItem("editZooId");
  console.log(zooId)
  sessionStorage.clear();


  const updatedZoo = {
    zooId: parseInt(zooId),
    cost: document.getElementById("cost").value,
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
  };

  fetch(`http://localhost:3000/save-edits/${zooId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedZoo),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Zoo updated:', data);
      window.location.href = "managePage.html";
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

document.addEventListener("DOMContentLoaded", function() {
  const title = sessionStorage.getItem("editTitle");
  const description = sessionStorage.getItem("editDescription");
  const cost = sessionStorage.getItem("editCost");
  const location = sessionStorage.getItem("editLocation");
    
  console.log(title)

  document.getElementById("title").value = title;
  document.getElementById("description").value = description;
  document.getElementById("cost").value = cost;
  document.getElementById("location").value = location;

});