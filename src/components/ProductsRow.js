import React from 'react';

function ProductsRow(props){

    return (
        <>
                <tr id="productsChart">
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td>{props.price}</td>
                </tr>
                </>
            )
    }
    
        

export default ProductsRow;