import React from 'react';
import ProductsRow from './ProductsRow';



function Products (products){
    let productsArray = products.products.data
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4" id='productsProducts'>

            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                      
                        <tbody>
                            {
                            productsArray.map( ( oneProduct , i) => {
                                return <ProductsRow { ...oneProduct} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Products;