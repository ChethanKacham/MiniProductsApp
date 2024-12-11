import React from 'react';
export default class Product extends React.Component{
    render()
    {
        return(
           
                <tr> 
                    <td>
                        {this.props.id}
                    </td>
                    <td>
                        {this.props.name}
                    </td>
                    <td>
                        {this.props.quant}
                    </td>
                    <td>
                        {this.props.price}
                    </td>
                </tr>
          
        )
    }
}