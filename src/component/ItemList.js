import React, { Component } from "react";
import { connect } from "react-redux";
import {
	deleteTodo,
	toggleTask,
	editTodo,
	update
} from "../actions/TodosActions";

class ItemList extends Component {
	state = {
		modal: false,
		newInput: ""
	};

	handleBlur = () => {
		this.setState({
			isEdited: false
		});
	};
	// toggle = id => this.setState({ modal: !this.state.modal, id: id });
	render() {
		const { items } = this.props;
		console.log(this.props);
		console.log("from itemLIst", items);
		return (
			<div className="tasks">
				<h2>Let's get some work done!</h2>
				<hr />
				<ul style={{ listStyle: "none" }}>
					{items.map((el, i) => (
						<li key={i}>
							<button onClick={() => this.props.toggleTask(i)}>
								{el.completed ? "Undo" : "Done"}
							</button>
							<button onClick={() => this.props.deleteTodo(i)}> Delete </button>
							<button
								id={i}
								onClick={e => {
									el.isEdited? this.props.editTodo({id: e.target.id,	text: this.state.newInput })
										: this.props.update(e.target.id);
								}}>
								{el.isEdited ? "Save" : "Edit"}
							</button>
							{el.isEdited ? (
								<input
									type="text"
									defaultValue={el.text}
									onChange={e => this.setState({ newInput: e.target.value })}
								/>
							) : (
								<span>{el.text}</span>
							)}
						</li>
					))}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { items: state.todos };
};
const mapDispatchToProps = dispatch => {
	return {
		toggleTask: id => dispatch(toggleTask(id)),
		deleteTodo: id => dispatch(deleteTodo(id)),
		editTodo: obj => dispatch(editTodo(obj)),
		update: index => dispatch(update(index))
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
