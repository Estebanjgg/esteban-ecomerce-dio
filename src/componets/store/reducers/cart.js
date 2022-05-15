import productsList from "./product";

const INITIAL_STATE = {
    value: 0,
};

export default function cart(state = INITIAL_STATE, action) {
    if (action.type === "ADD_TO_CART") {
        return {
            ...state,
            value: (state.value + 1)
        };
    }

    return state;
}
