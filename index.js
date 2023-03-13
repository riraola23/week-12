let id = 0;

document.getElementById('add').addEventListener('click', () => { // "add" button on html. when click, 
    let createdDate = new Date();                                //    new date created
    let table = document.getElementById('list');           // refering to table because table id in HTML is "list"
    let row = table.insertRow(1); //positon 1 because the heading is positon zero(index), created new row
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('car-model').value;
    //row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`; //this template literal will show the date by mm/dd/yyyy
    row.insertCell(1).innerHTML = document.getElementById('charge-date').value;
    row.insertCell(2).innerHTML = document.getElementById('charging-speed').value;
    row.insertCell(3).innerHTML = document.getElementById('location').value;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('car-model').value = '';
    document.getElementById('charging-speed').value = '';


});

function createDeleteButton(id) { // function creates a button
    let btn = document.createElement('button'); //
    btn.className = 'btn btn-secondary';        //
    btn.id = id;                                //
    btn.innerHTML = 'Delete';                   //
    btn.onclick = () => {                       //
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`); //deletes row button is assigned to.
        elementToDelete.parentNode.removeChild(elementToDelete); // removes child from parent)
    };
    return btn;


}