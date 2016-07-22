const ProductList = React.createClass({  //using React.createClass creates new components
	render : function() { // it passes, a single arguments, a js OBJECT!
		const product = Data[0];
		return (
			<div className='ui items'>
				<Product 
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



const Product = React.createClass({
	render: function () {
		return(
			<div className = 'item'>
				<div className = 'image'>
					<img src ={this.props.product_image_url} />
				</div>
			<div className='middle aligned content'>
				<div className='header'>
				 <a>
				 	<i className = 'large caret up icon'></i>
				 </a>
				 {this.props.votes}
				</div>
				<div className='description'>
					<a href={this.props.url}>
						{this.props.title}
					</a>
				</div>
				<div classNme='extra'>
					<span>Submitted by: </span>
					<img 
						className='ui avatar image'
						src={this.props.submitter_avatar_url}
					/>
				</div>
			</div>
		</div>
		);				
	},
});		



//RENDER - here we tell React where to render this component inside a specific DOM node 

ReactDom.render( // we are passing in TWO arguments
	<ProductList/>, //WHAT we're passing
	document.getElementById('content') // WHERE to render it

	);

