import React from 'react';
export default class Presult extends React.Component {
    render(){
        return(
            <tr> 
                    <td>
                        {this.props.id}
                    </td>                    
                    <td>
                        {this.props.price}
                    </td>
                </tr>
        )
    }
}