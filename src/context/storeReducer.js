const initialStore = {
  cart: { totalItems: 0 },
};

const types = {
  addCart: "ADDCART",
};

const storeReducer = (state = initialStore, action) => {
  switch (action.type) {
    case types.addCart:
      return {
        ...state,
        cart: { totalItems: state.cart.totalItems + action.payload },
      };
    default:
      return state;
  }
};

export { initialStore, types };

export default storeReducer;
