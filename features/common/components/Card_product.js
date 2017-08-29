import React from 'react';


const product = ({items}) => (
    <div>
        <h1>Lista de productos</h1>
        <div className="cont-general-products">
            {
                items.map(item => {
                    return(
                    <div className="cont-product">
                        <div className="cont-img">
                            <img src={item.image} alt=""/>
                        </div>
                        <div className="cont-info">
                            <h2>{item.name}</h2>
                            <p>Precio: {item.price}</p>
                        </div>
                    </div>
                    )
                })
            }
        </div>
         <style jsx>
            {`
                .cont-general-products{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content:center;
                    padding:60px 0;
                }
                .cont-product{
                    min-width: 300px;
                    max-width: 300px;
                    background: white;
                    border-radius: 4px;
                    margin: 10px;    
                    box-shadow: 1px 1px 1px #d0cccc;
                    padding:10px;
                }
                .cont-img{
                    padding: 10px;
                    border: 1px solid #ececec;
                    border-top-left-radius: 4px;
                    border-top-right-radius: 4px;
                    min-height: 285px;
                    max-height: 285px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .cont-img img{
                    max-width:100%;
                    max-height:100%;
                }
                .cont-info{
                    padding:10px;
                    border-top:1px solid #ececec;
                }
                .cont-info{
                    text-transform:capitalize;
                }
                h1{
                    padding: 40px 0 0 10px;
                }
            `}
        </style>
    </div>
)

export default product;