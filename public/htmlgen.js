//GET ROUTE
let todosList = document.getElementById('todos');

window.addEventListener('load', () => {
    console.log('loaded, get request sent');

    fetch('/home', {
        method: 'GET'
    })
        .then(res => res.json())
        .then(res => res.split(',').forEach((x, i) => {
            todosList.innerHTML +=
                `<li id="liRender${i}" >${x}</li?><button id="deleteButton${i}" class="deleteButton" >x</button>`
            
        }))
        .then(() => deleteButtonsSet())
        .catch((error) => {
            console.error('Error:', error);
        })

});
const addForm = document.getElementById('addTodoForm')
// console.log(addButton);


//POST ROUTE
addForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = document.getElementById('addTodoForm')
    const addFormData = new FormData(addForm);
    const addTodo = [...addFormData.values()]

    fetch('/home', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(addTodo)
    })
        .then(res => res.json())
        
        .then(res => {
            todosList.innerHTML = '';
    res.split(',').forEach((x, i) => {
        todosList.innerHTML +=
            `<li id="liRender${i}" >${x}</li?><button id="deleteButton${i}" class="deleteButton" >x</button>`

    })
        })
        .then(() => deleteButtonsSet())
        .then(res => console.log(res))
    .catch((error) => {
        console.error('Error:', error);
    });

    console.log('success');
});

// DELETE ROUTE
function deleteButtonsSet() {
    let deleteButtons = document.querySelectorAll(".deleteButton");
    console.log(deleteButtons);
    deleteButtons.forEach((x, i) => x.addEventListener('click', function() {
        console.log(deleteButtons[i])
    }))
}

