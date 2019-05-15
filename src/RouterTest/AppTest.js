import React from 'react';
import './AppStyle.css';
import Products from './Products';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import ProductContent from './ProductContent';
import Home from './Home';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Footer from './Footer';
import AddProduct from './AddProduct';


class Apptest extends React.Component {
    constructor() {
        super();
        this.state = {
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
            product: { name: '', price: '', description: '' }
        }
    }
    updateProduct = (event) => {
        const newProduct = { ...this.state.product, [event.target.name]: event.target.value }
        this.setState({ product: newProduct });
    }
    addProduct = (e) => {
        e.preventDefault();
        const newProducts =
            [...this.state.products,
            {
                name: this.state.product.name,
                price: this.state.product.price,
                description: this.state.product.description,
                id: this.state.products.length + 1
            }]
        this.setState({ products: newProducts, product: { name: '', price: '', description: '' } });
    }
    deleteProduct = (deletedItemId) => {
        const remainderProduct = this.state.products.filter(prod => prod.id !== deletedItemId)
        this.setState({...this.state, products:remainderProduct})
    }
    render() {
        return (
            <div className="appTest">
                <Router>
                    <Header />
                    <div>
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/about' component={About} />
                            <Route path='/products' render={() => <Products products={this.state.products} />} />
                            <Route path='/contact' component={Contact} />
                            <Route path='/addProduct' render={() =>
                                <AddProduct
                                    product={this.state.product}
                                    products={this.state.products}
                                    onSubmit={this.addProduct}
                                    onChange={this.updateProduct} />}
                            />
                            <Route path='/product/:id' render={(props) => 
                                <ProductContent 
                                    {...props} 
                                    products={this.state.products} 
                                    onDelete={this.deleteProduct}
                                    />} />
                        </Switch>
                    </div>
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default Apptest;