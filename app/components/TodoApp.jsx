var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {
                    id: 1,
                    text: 'walk the dog'
                }, {
                    id: 2,
                    text: 'clean the yard'
                }, {
                    id: 3,
                    text: 'leave mail box'
                }, {
                    id: 4,
                    text: 'play cs go'
                }
            ]
        };
    },
    handleAddTodo: function (text) {
        alert('new Todo: ' + text);
    },
    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;
