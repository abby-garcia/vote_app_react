//components = different parts of the app

const ProductList = React.createClass({ // React.createClass is how components are created
	render: function () { // this is a method! 
		return (
			<div className='ui items'>
				Hello, friend! I am a basic React component.
			</div>
			);
		},
});
