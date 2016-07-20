const ProductList = React.createClass({  //using React.createClass creates new components
	render : function(){ // it passes, a single arguments, a js OBJECT!
		return (
			<div className = 'ui items'>
			Hello, friend! I am a basic React component.
			</div> /
			);
	},
});




//RENDER - here we tell React where to render this component inside a specific DOM node 

ReactDom.render( // we are passing in TWO arguments
	<ProductList/>, //WHAT we're passing
	document.getElementById('content') // WHERE to render it

	);

