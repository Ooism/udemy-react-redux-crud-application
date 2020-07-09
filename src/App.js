import React from 'react';

//class app extends component {
//render() {
//	<react.fragment>
//	return  <input type="text" onchange={()=> {console.log("i am clicked!")}} />;
//	</react.fragment>
//}
//
//}


const App = () => {
   return (
	<div>
	  <Cat />
	  <Cat />
	</div>
)
}

const Cat = () => {
	return <div>Meow!</div>
}

export default App;
