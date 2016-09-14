import React from 'react'

let TodosList = React.createClass({
	render: function(){
	
		let createItem = (item, index) =>{
			return (
				<li key={index}>{item.text}
					<span onClick={this.props.removeItem.bind(null, item['.key'])}
					style={{color:'red',marginLeft:'10px', cursor:'pointer'}}>
					X</span>
				</li>
			)
		}//createItme
		return <ul>{this.props.items.map(createItem)}</ul>;

	}
});

export default TodosList;