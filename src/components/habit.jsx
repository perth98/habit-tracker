import React, { Component } from "react";

class Habit extends Component {
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    };

    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    };

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };

    render () {
        const {name, count} = this.props.habit;
        return (
            <li className="habit">
              <span className="habit-name">{name}</span>
              <span className="habit-count">{count}</span>
              <button 
                class="habit-button habit-increase"
                onClick={this.handleIncrement}
              >
                  <i className="fas fa-plus-square"></i>
              </button>
              <button 
                class="habit-button habit-decrease"
                onClick={this.handleDecrement}
              >
                  <i className="fas fa-minus-square"></i>
              </button>
              <button 
                class="habit-button habit-delete"
                onClick={this.handleDelete}
              >
                  <i className="fas fa-trash"></i>
              </button>
            </li>
          );
    }
}

export default Habit;
