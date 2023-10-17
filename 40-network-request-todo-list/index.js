async function asyncTodoList() {
    try{
        const result = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await result.json();
        return data;
    } catch(error) {
        console.log(error);
    }
}