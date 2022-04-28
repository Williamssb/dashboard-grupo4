import React from 'react';
import SmallCard from './SmallCard';


function TotalCards({products, users}){


let totalProducts = {
    title: 'Total Products',
    color: '', 
    quantity: `${products.count}`,
    // this.products.count,
    icon: 'fa-couch'
}

/* <!-- Total users --> */

let totalUsers = {
    title:' Total Users', 
    color:'success', 
    quantity: `${users.total}`,
    icon:'fa-user-check'
}

let cartProps = [totalProducts, totalUsers];

    return (
    
        <div className="row">
            
            {cartProps.map( (products, i) => {

                return <SmallCard {...products} key={i}/>
            
            })}

        </div>
    )
}

export default TotalCards;