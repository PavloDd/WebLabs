export const addItem = (item) =>(dispatch, getState) => {
    const state = getState();
    const isItemAlreadyInCart = state.items.some((cartItem) => cartItem.id === item.id);

    if (!isItemAlreadyInCart) {
        dispatch({
            type: 'ADD_ITEM',
            payload: item,
        });
    }
};

export const removeItem = (itemId) => ({
  type: 'REMOVE_ITEM',
  payload: itemId,
});

export const increaseQuantity = (itemId) => ({
  type: 'INCREASE_QUANTITY',
  payload: itemId,
});

export const decreaseQuantity = (itemId) => ({
  type: 'DECREASE_QUANTITY',
  payload: itemId,
});