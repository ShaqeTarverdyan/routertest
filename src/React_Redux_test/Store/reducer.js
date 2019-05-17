const primaryState = {
    products: [
        { id: 1, name: 'Product 1', price: '$10', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6Do825jKwTkhSD1CxmZFlMzWflQTjDTPWZ8wNcV0JsxC5F0T', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
        { id: 2, name: 'Product 2', price: '$20', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuHTELYRvq4JPiGOAtFsBGDDTWssgscLRYZ_iY5uo6kCL40qUhaw', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
        { id: 3, name: 'Product 3', price: '$20', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuZHIASPuh2Q7ETJynBEWvGe00YaipO7Fy6327PpoQFGH6w3p9', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
        { id: 4, name: 'Product 4', price: '$20', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAgow0ivxrLlNAYoC0mMGL_ixS-alFk9ntOiYOBir1rAStVVsxQ', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
        { id: 5, name: 'Product 5', price: '$20', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WU3jDi1iTipR4SWHjVJS3Nt2WOHblAZj3PWGWRfPpZrRmuQbQw', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
        { id: 6, name: 'Product 6', price: '$20', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRApZIlWyJtf9cpBOI3KOgtsTkiSUBkP-m4QZyxH1rGuHEsl57ChA', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
    ],
    product: { name: '', price: '', image: '', description: '' }
}

const reducer = (state = primaryState, action) => {

    if (action.type === 'DELETE_PRODUCT') {
        const remainder = state.products.filter(item => item.id !== action.deletedProductId);
        console.log(remainder);
        return { ...state, products: remainder }
    }
    else if (action.type === 'UPDATE_PRODUCT') {
        const event = action.payload;
        const newProduct = { ...state.product, [event.target.name]: event.target.value };
        return { ...state, product: newProduct };
    }
    else if (action.type === 'ADD_PRODUCT') {
        const newProduct = 
            [...state.products,
            {
                id:state.products.length + 1,
                name: state.product.name,
                price: state.product.price,
                description: state.product.description
            }]
            console.log(newProduct);
        return { ...state, products: newProduct, product: { name: '', price: '', description: '' }};
    }
    else {
        return state;
    }

}

export default reducer;