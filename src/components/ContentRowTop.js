import React, {useState, useEffect} from 'react';
import ContentRowCenter from './ContentRowCenter';
import TotalCards from './TotalCards';
import Products from './Products';
// cambiar nombres de los componentes
function ContentRowTop(){
let [products, setProducts] = useState(null)
let [users, setUsers] = useState(null)
let [isLoading, setIsLoading] = useState(true)	

useEffect(()=>{
fetch('http://localhost:3001/api/products',)
.then(response => response.json())
.then(data => {
	setProducts(data)
	console.log("PRODUCTS", products)
	if(data){
		setIsLoading(false)
	}
})
.catch(err => console.log(err))
	}, )

	useEffect(()=>{
		fetch('http://localhost:3001/api/users',)
		.then(response => response.json())
		.then(data => {
			setUsers(data)
			if(data){
				setIsLoading(false)
			}
		})
		.catch(err => console.log(err))
			}, [])

console.log("ESTA ES LA VARIABLE PRODUCTS", products)

    return(
<>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">EcoPlace DashBoard</h1>
					</div>
				{isLoading && <p>Loading Data</p>}
					{/*<!-- Content Row Products & Users-->*/}
					{!isLoading && products && users && (<>
					<TotalCards products={products} users={users} />
					<ContentRowCenter products={products}/>
					
					<Products products={products}/> 
                    </>)}
					
	
				</div>
				{/*<!--End Content Row Top-->*/}

				</>
    )

}
export default ContentRowTop;