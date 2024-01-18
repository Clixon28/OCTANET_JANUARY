// Create the HTML table element
var table = document.createElement('table');
table.border = '1';

// Create the table heading row
var headingRow = document.createElement('tr');

// Create the table heading cells
var headingCells = [
['Task', 'Task'],
['Date', 'Date'],
['Priority', 'Priority'],
['Label', 'Label']
];

headingCells.forEach(function(headingCell) {
var th = document.createElement('th');
th.textContent = headingCell[1];
headingRow.appendChild(th);
});

// Add the table heading row to the table
table.appendChild(headingRow);

// Add the table to the page
document.body.appendChild(table);

document.getElementById('addTaskForm').addEventListener('submit', function(e) {
e.preventDefault();

var taskInput = document.getElementById('addTaskInput');
var taskText = taskInput.value.trim();
var taskDate = document.getElementById('addTaskDate');
var taskDateValue = taskDate.value;
var taskP = document.getElementById('priority');
var taskPriority = taskP.value;
var taskL = document.getElementById('addTaskLabel');
var taskLabel = taskL.value;

if (!taskText || !taskDateValue || !taskPriority || !taskLabel) {
alert('Please fill in all the form fields before submitting the task.');
return;
}

// Create the table data row
var dataRow = document.createElement('tr');

// Create the table data cells
var dataCells = [
['Task', taskText],
['Date', taskDateValue],
['Priority', taskPriority],
['Label', taskLabel]
];

dataCells.forEach(function(dataCell) {
var td = document.createElement('td');
td.textContent = dataCell[1];
dataRow.appendChild(td);
});

// Add the table data row to the table
table.appendChild(dataRow);

// Clear the form fields
taskInput.value = '';
taskDate.value = '';
taskP.value = '';
taskL.value = '';
});