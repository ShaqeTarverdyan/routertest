import React from 'react';
import './AppStyle.css';

class AddProduct extends React.Component {
    render() {
        return (
            <div className='addProductdiv'>
                <form onSubmit={this.props.onSubmit} className='addProductForm'>
                  
                        <input 
                            placeholder='Product Name' 
                            onChange={this.props.onChange}
                            name='name'
                            value={this.props.product.name}
                            
                        />
                        <input 
                            placeholder='Price' 
                            onChange={this.props.onChange}
                            name='price'
                            value={this.props.product.price}
                        />
                        <textarea  
                            name='description' 
                            onChange={this.props.onChange}  
                            rows='15' 
                            cols='80' 
                            placeholder='Add description...'
                            value={this.props.product.description}
                        />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default AddProduct;