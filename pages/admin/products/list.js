import React, { Component } from 'react';
import { list }  from '../../../api/products';
import List from '../../../features/common/components/Card_product';

class  ListProducts extends Component{

    constructor(props){
        super(props);
        this.state = { products: [] }
    }

    componentWillMount(){
        list()
        .then(res => {
            this.setState({ products: res.data.products})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        const { products } = this.state;

        return(
            <div className="container">
                <List items={products} />   
                <style jsx>{`
                .container {
                    background-color:#ecf0f1;
                }
                `}</style>
            </div>
        )
    }
}

export default ListProducts;