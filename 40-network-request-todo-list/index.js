async function fetchTodos() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos")
        if(!res.ok) {
            throw new Error(`HTTP error! Status: ${ response.status }`);
        }
        const todos = await res.json();
        return todos;
    } catch (error) {
        console.error('Error fetching');
        return null;
    }
}
fetchTodos()
    .then(todos => {
        if(todos) {
            console.log('Todos:', todos);
        }
    });