import React from 'react';
import Productlist from './Productlist';
export default class  App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      det:[]
    };
  }
  async componentDidMount(){
   const url="http://localhost:3001/products";
    const response= await fetch(url);
    const data= await response.json();
    this.setState({det:data})
    console.log(data);
    console.log("asd");
  }
  render()
  {
    return(
      <div>
        <div class = "about"><h1>Products</h1></div>
        <Productlist send={this.state.det}/>
      </div>
    )
  }
}
