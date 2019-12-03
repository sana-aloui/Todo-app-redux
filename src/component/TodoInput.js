import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/TodosActions";
// import { bindActionCreators } from "redux";

const mapDispatchToProps = dispatch => {
	return {
		addTodo: input => dispatch(addTodo(input))
	};
};

class TodoInput extends Component {
	constructor(props) {
		super(props);
		this.state = { text: "" };
	}

	handleTextChange = e => {
		// console.log('from arrow func',this)
		this.setState({
			text: e.target.value
		});
	};

	handleClick = () => {
		console.log(this.props);
		this.state.text !== "" && this.props.addTodo(this.state);
		this.setState({
			text: ""
		});
	};

	render() {
		return (
			<div>
				<div className="container">
					<h1>To-Do App!</h1>
					<h3>Add New To-Do</h3>
					<input
						className="new-task"
						type="text"
						// value={this.state.newTask}
						placeholder=" Enter new task"
						onChange={this.handleTextChange}
					/>

					<input
						type="button"
						value="Add"
						className="add-button"
						onClick={() => this.handleClick()}
					/>
				</div>
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(TodoInput);

//connect() liera directement notre component react au state et aux actions

//the mapDispatchToProps is responsible to dispatch the actions creators.
