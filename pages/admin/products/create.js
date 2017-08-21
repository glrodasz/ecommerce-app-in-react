import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import { create }  from '../../../api/products';

class CreateProduct extends Component{
    constructor(props){
        super(props);
        this.state = { imagePreviewUrl: '' };

        this.handleImageChange = this.handleImageChange.bind(this);
    }

    handleImageChange = event => {
        event.preventDefault();

        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {
            this.setState({imagePreviewUrl: reader.result});  
        }
        reader.readAsDataURL(file)
    }

    handleSubmit = event =>{
        event.preventDefault();

        const { imagePreviewUrl }  = this.state;

        let product = { product: {
            image: imagePreviewUrl,
            name: this.refs.productName.value,
            price: this.refs.productPrice.value,
            quantity: 0
	    }}

        create(product)
        .then(res => {
            this.refs.form.reset();
            this.showMessage('Se agregado el producto con éxito');
        })
        .catch(err =>{
            console.log(err);
            this.showMessage('Error al agregar el producto');
        })
    }

    showMessage = message => {
        ReactDOM.render(
            <p>{`${message}`}</p>,
            document.getElementById('contMessage')
            );
    }

    render(){
        return(           
            <div className="container">
                <form ref="form" className="form" onSubmit={this.handleSubmit}>
                    <div className="cont-item-form">
                        <h2>Agregar producto</h2>
                    </div>
                    <div className="cont-item-form">
                        <label htmlFor="productImage">Imagen del producto</label>
                        <input id="productImage" ref="productImage" type="file" onChange={this.handleImageChange} />
                    </div>
                    <div className="cont-item-form">
                        <input ref="productName" placeholder="Nombre del producto" type="text"/>
                    </div>
                    <div className="cont-item-form">
                        <input ref="productPrice" placeholder="Precio del producto" type="text"/>
                    </div>
                    <div className="cont-item-form">
                        <button className="btn-form">Agregar producto</button>
                    </div>
                    <div id="contMessage" className="cont-message">

                    </div>
                </form>
                <style jsx>{`
                .container {
                    background-color:#ecf0f1;
                }
                .form{
                    max-width: 460px;
                    margin: 40px 0;
                    background-color: white;
                    border-radius: 4px;
                    padding: 20px 40px;
                    border: 1px solid #ececec;
                }
                .cont-item-form{
                    padding: 10px 0 20px;
                    margin: 12px 0;
                    border-bottom: 1px solid #ececec;
                }
                .cont-item-form:last-child{
                    border:0;
                }
                .cont-item-form input{
                    width: 100%;
                    border-radius: 4px;
                    border: 1px solid #ececec;
                    padding: 9px 10px;
                }
                .btn-form{
                    background: #70C65F;
                    border: 0;
                    padding: 10px 15px;
                    color: white;
                    border-radius: 4px;
                    box-shadow: 1px 1px 1px rgb(87, 142, 76);
                }
                `}</style>
            </div>
        )
    }
}

export default CreateProduct;
