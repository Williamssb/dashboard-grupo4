import React from 'react';
import LastProduct from './LastProduct';
import CategoriesInDB from './CategoriesInDB';
function ContentRowCenter({products}){

    let lastProduct = products.data.slice(-1).pop();
    console.log("LAST PRODUCTS EN CONTENT ROW", lastProduct)

    return (
        <div className="row">
            
            {/*<!-- Last Product in DB -->*/}
            {products && (<>

            <LastProduct lastProduct={lastProduct}/>
            {/*<!-- End content row last products in Data Base -->*/}

            {/*<!-- Categories in DB -->*/}
            <CategoriesInDB categories={products.countByCategories}/>
            </>)}

        </div>
    )
}

export default ContentRowCenter;