import {
    EDIT_BUTTON_PREFIX,
    addItenToPage,
    clearInputs,
    renderItemsList,
    getInputValues,
} from "./dom_util";
import { deleteShoes, getAllShoes, postShoes, updateShoes } from "./api.js";

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("findInput");

let shoes = [];

const onEditItem = async (e) => {
    const itemId = e.target.id.replace(EDIT_BUTTON_PREFIX, "");

    await updateShoes(itemId, getInputValues())

    clearInputs();
    refetchAllShoes();
};

const onRemoveItem = (id) => deleteShoes(id).then(refetchAllShoes);

export const refetchAllShoes = async () => {
    const getAllShoes = await getAllShoes();

    shoes = getAllShoes;

    renderItemsList(shoes, onEditItem, onRemoveItem);
};

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const { name, price, size, color } = getInputValues();

    clearInputs();

    postShoes({
        name,
        price,
        size,
        color,
    }).then(refetchAllShoes);
});

findButton.addEventListener("click", () => {
    const foundShoes = shoes.filter(
        (shoes) => shoes.name.search(findInput.value) !== -1
    );

    renderItemsList(foundShoes, onEditItem, onRemoveItem);
})

cancelFindButton.addEventListener("click", () => {
    renderItemsList(shoes, onEditItem, onRemoveItem);

    findInput.value = "";
});

refetchAllShoes();