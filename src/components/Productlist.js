import React from 'react'
import Product from './Product'
export default class Productlist extends React.Component{
    render()
    {
        var retrive=this.props.send.map(pduct=>(
            <Product id={pduct.id} name={pduct.name} quant={pduct.quantity} price={pduct.price}/>)
            );
        return(
            <div>
                 <table align = "center"  border="1">
                    <thead>
                         <th>ProductId</th>
                        <th>ProductName</th>
                         <th>ProductQuantity</th> 
                         <th>ProductPrice</th>
                     </thead>
                     <tbody>
                        {retrive}
                    </tbody>
                    </table>
            </div>
        );
    }
}