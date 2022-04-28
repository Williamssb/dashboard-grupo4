import {useState} from "react";
import EachCategory from './EachCategory';


function CategoriesInDB(categories) {
  let categoryCountCategories = Object.keys(categories.categories.categoryCount)
  let categoryCount = useState(true)
  return (
   
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">

        <div className="card-body">
          <div className="row">
            {categoryCount && categories &&  categoryCountCategories.map(oneCategory => 
            <EachCategory categoryKey={oneCategory} categoryObject={categories} categoryCount={categoryCount}/>
              )}
            </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDB;
