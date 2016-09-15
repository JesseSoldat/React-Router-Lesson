import React from 'react'
import List from './List'

let Todos = React.createClass({
	mixins: [ReactFireMixin],

	getInitialState: function(){
		return {
			items: [],
			text: ''
		}
	},

	componentDidMount: function(){
		let firebaseRef = firebase.database().ref('react/todo/items');

		this.bindAsArray(firebaseRef, 'items');
	},

	handleSubmit: function(e){
		e.preventDefault();
		if(this.state.text && this.state.text.trim().length !== 0) {

			this.firebaseRefs['items'].push({
				text: this.state.text
			});
			this.setState({
				text: ''
			})

		} else {
			return
		}
	},

	onChange: function(e){
		this.setState({text: e.target.value});
	},

	removeItem: function(key){
		let firebaseRef = firebase.database().ref('react/todo/items');
		firebaseRef.child(key).remove();
	},

	render: function(){
		return(<div>
			<form onSubmit={this.handleSubmit}>
				<input onChange={this.onChange} value={this.state.text}/>
				<button>{'Add #'+(this.state.items.length+1)}</button>
			</form>
			<List items={this.state.items}
				removeItem={this.removeItem} />
		</div>



			)
	}
});
export default Todos;