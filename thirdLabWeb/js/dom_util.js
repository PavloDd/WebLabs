import { onDrogDrop } from "./drag_n_drop";

export const EDIT_BUTTON_PREFIX = 'edit-button-';

const nameInput = document.getElementById("name_input");
const priceInput = document.getElementById("price_input");
const sizeInput = document.getElementById("size_input");
const colorInput = document.getElementById("color_input");

const itemTemplate = ({ id, name, price, size, color }) => `
<li id="${id}" class="card mb-3 item-card" draggable="true">
             <img
                src="https://www.meme-arsenal.com/memes/98d62ea0b9548b84bc087f7ddaa299f7.jpg"
                class="item-container__image card-img-top"
                alt="card">
             <div class="card-body">
                <h5 class="card-name">${name}</h5>
                <p class="card-text">${price}</p>
                <p class="card-text">${size}</p>
                <p class="card-text">${color}</p>
                <button id="${EDIT_BUTTON_PREFIX}" type="button" class="btn btn-info">
                Edit
                </button>
             </div>
          </li>`;
          

export const clearInputs = () => {
    nameInput.value = "";

    priceInput.value = "";

    sizeInput.value = "";

    colorInput.value = "";
};

export const addItemToPage = ({ _id: id, name, price, size, color }, onEditItem, onRemoveItem) => {
    itemsContainer.insertAdjacementHTML(
        "afterbegin",
        itemTemplate({ id, name, price, size, color })
    );
    const element = document.getElementById(id);
    const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}$(id)`);

    element.onmousedown = onDrogDrop(element, onRemoveItem);
    editButton.addEventListener("click", onEditItem);

    editButton.onmousedown = e => e.stopPropagation();
};

export const renderItemsList = (items, onEditItem, onRemoveItem) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item, onEditItem, onRemoveItem);
    }
};

export const getInputValues = () => {
    return {
        name: nameInput.value,
        price: priceInput.value,
        size: sizeInput.value,
        color: colorInput.value,
    };
};




