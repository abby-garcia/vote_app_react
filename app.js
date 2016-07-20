//components = different parts of the app

const ProductList = React.createClass({ // this is how you create components in React
render: function () {
const product = Data[0];
return (
<div className='ui items'>
	<Product    // this calls the component below
	id={product.id}
	title={product.title}
	description={product.description}
	url={product.url}
	votes={product.votes}
	submitter_avatar_url={product.submitter_avatar_url}
	product_image_url={product.product_image_url}
	/>
</div>
);
},
});


ReactDOM.render( //here you pass two arguments:
<ProductList />, //first argument being, WHAT we'd like to render
document.getElementById('content') // second argument, is WHERE we'd like to render it
);


const Product = React.createClass({
render: function () {
return (<div></div>)
}
});