export default function ToDo({ todo, completeTodo, deleteTodo }) {

    return (
        <div>
            <div className="d-flex"  onClick={completeTodo}>
                <ul>
                    <li>
                        {todo.text}
                    </li>
                </ul>
            </div>
        </div>
    );
}