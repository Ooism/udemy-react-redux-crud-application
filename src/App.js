import React, { Component } from 'react';

//class app extends component {
//render() {
//	<react.fragment>
//	return  <input type="text" onchange={()=> {console.log("i am clicked!")}} />;
//	</react.fragment>
//}
//
//}


const App = () => (<Counter> </Counter>)

class Counter extends Component  {
  constructor(props) {
	  super(props)
	  console.log(this.state)
	  this.state = { count: 0 }
  }
  handlePlusButton = () => {
	  this.setState({ count: this.state.count + 1})
  }

  handleMinusButton = () => {
	  this.setState({count: this.state.count - 1})
  }
	
	render() {
	  return (
	   <React.Fragment>
	   <div>count: {this.state.count }</div>
	   <button onClick={this.handlePlusButton}>+1</button>
	   <button onClick={this.handleMinusButton}>-1</button>
	   </React.Fragment>
	  )
 }
}



export default App;
