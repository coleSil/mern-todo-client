import React, {Component} from 'react'; 
import { Link } from 'react-router-dom'; 
import axios from 'axios';

// react functional component being used in todoList() because it's short. uses () because JSX code within parentheses 
const Todo = props => (
    <tr>{/* for below className is completed if todo_completed is true, otherwise empty string */}
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/" + props.todo._id}>Edit</Link>
        </td>
    </tr>
)

export default class TodosList extends Component{

    constructor(props) {
        super(props);
        // initial state is empty array 
        this.state = { todos: [] };
    }

    /* componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). 
    Initialization that requires DOM nodes should go here. 
    If you need to load data from a remote endpoint, this is a good place to instantiate the network request. */
    componentDidMount() {
        axios.get('http://localhost:4000/todos').then(response => {
            this.setState({todos: response.data});
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/todos').then(response => {
            this.setState({todos: response.data});
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    // for each Todo in todos it returns a Todo component
    todoList(){
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        });
    }

    render() {
        return(
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}