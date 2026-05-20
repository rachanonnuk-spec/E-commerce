import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';


function LastestCollection() {

    const{products} = useContext(ShopContext);
    console.log(products);


  return (
    <div>
        
    </div>
  )
}

export default LastestCollection