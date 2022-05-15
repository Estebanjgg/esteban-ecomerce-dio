const Add = (cart) => {
    return {
        type: "ADD_TO_CART",
        cart,
    };
};

export default {
    Add,
};
