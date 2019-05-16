const initialState = {
    products: [
        { id: 1, name: 'name1', price: '$500', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' },
        { id: 2, name: 'name2', price: '$500', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' },
        { id: 3, name: 'name3', price: '$500', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' },
        { id: 4, name: 'name4', price: '$500', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' },
        { id: 5, name: 'name5', price: '$500', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' },
        { id: 6, name: 'name6', price: '$500', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' },
        { id: 7, name: 'name7', price: '$500', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' },
        { id: 8, name: 'name8', price: '$500', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' },
        { id: 9, name: 'name9', price: '$500', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' },
        { id: 10, name: 'name10', price: '$500', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' },
        { id: 11, name: 'name11', price: '$500', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' },
        { id: 12, name: 'name12', price: '$500', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' },
    ],
    product: { name: '', price: '', description: '' },
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_PRODUCT': {
            const event = action.payload;
            const newProduct = { ...state.product, [event.target.name]: event.target.value }
            return { ...state, product: newProduct };
        
        }
        case 'ADD_PRODUCT':
            const newProducts =
                [...state.products,
                {
                    name: state.product.name,
                    price: state.product.price,
                    description: state.product.description,
                    id: state.products.length + 1
                }]

                console.log(newProducts);
            return { ...state, products: newProducts, product:{name:'', price:'', description:''} }

        case 'DELETE_PRODUCT':
            const remainderProduct = state.products.filter(product => product.id !== action.deletedItemId);
            return { ...state, products: remainderProduct };
            
        default:
        console.log('kkjkjk');
            
    }
    return state;
}

export default reducer;