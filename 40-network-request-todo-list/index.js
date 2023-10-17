async function fetchTodos() {
    try {
        if(!Response.ok) {
            throw new Error(`HTTP error! Status: ${ response.status }`);
        }
        const todos = await response.json();
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