const Add = (cart, product) => {
    return {
        type: "ADD_TO_CART",
        cart,
        product
    }
}
const AddItem = {cart, product}
export default {
    Add
}
