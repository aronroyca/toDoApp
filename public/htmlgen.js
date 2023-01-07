// console.log(todos);
let todosList = document.getElementById('todos');

window.addEventListener('load', () => {
    console.log('loaded, get request sent');

    fetch('/home', {
        method: 'GET'
    })
        .then(res => res.json())
        .then(res => res.split(',').forEach(x => {
            todosList.innerHTML += 
                `<li>${x}</li?`
            
        }))
    .catch((error) => {
        console.error('Error:', error);
    })

})
const addForm = document.getElementById('addTodoForm')
// console.log(addButton);

addForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = document.getElementById('addTodoForm')
    const addFormData = new FormData(addForm);
    // const addTodo = [...addFormData.values()]

    fetch('/home', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(addFormData)
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    console.log('success');
});
