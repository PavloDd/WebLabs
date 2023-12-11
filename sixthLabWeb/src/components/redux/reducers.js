const initialState = {
  items: [], // тут ти тримаєш масив айтемів
  itemQuantities: {}, // об'єкт для збереження кількості кожного айтема
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const newItem = action.payload;
      const itemId = newItem.id;

      return {
        ...state,
        items: [...state.items, newItem],
        itemQuantities: {
          ...state.itemQuantities,
          [itemId]: (state.itemQuantities[itemId] || 0) + 1,
        },
      };

    case 'REMOVE_ITEM':
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      const updatedQuantities = { ...state.itemQuantities };
      delete updatedQuantities[action.payload];

      return {
        ...state,
        items: updatedItems,
        itemQuantities: updatedQuantities,
      };

    case 'INCREASE_QUANTITY':
      const increasedQuantities = {
        ...state.itemQuantities,
        [action.payload]: (state.itemQuantities[action.payload] || 0) + 1,
      };

      return {
        ...state,
        itemQuantities: increasedQuantities,
      };

    case 'DECREASE_QUANTITY':
      const currentQuantity = state.itemQuantities[action.payload] || 0;
      const decreasedQuantities = {
        ...state.itemQuantities,
        [action.payload]: Math.max(0, currentQuantity - 1),
      };

      return {
        ...state,
        itemQuantities: decreasedQuantities,
      };

    // інші кейси
    default:
      return state;
  }
};

export default itemsReducer;