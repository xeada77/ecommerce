const initialStore = {
  cart: { items: [], totalItems: 0 },
};

const types = {
  addCart: "ADDCART",
};

const storeReducer = (state = initialStore, action) => {
  switch (action.type) {
    case types.addCart:
      return {
        ...state,
        cart: {
          items: [...state.cart.items, action.payload],
          totalItems: state.cart.totalItems + action.payload.amount,
        },
      };
    default:
      return state;
  }
};

export { initialStore, types };

export default storeReducer;
