import React from "react";

function EachCategory({categoryKey, categoryObject, categories}){
  let productCount = null

  if(categories){
    productCount = categoryObject.categories.categoryCount[categoryKey].products
  } else {
   productCount= categoryObject.categories.categoryCount[categoryKey].products

  }

    return (
    <div className="col-lg-6 mb-4">
    <div className="card bg-dark text-white shadow">
          <div className="card-body">{`${categoryKey}: ${productCount}`}</div>
         </div>
            </div>
    )
}

export default  EachCategory;