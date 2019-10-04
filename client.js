// init global variables
let first = '';
let last = '';
let id = '';
let title = '';
let salary = '';
let salaries = []; // may not need. Try using .attr
let total = 0;

// on document ready...
$(document).ready(main)
function main(){
  // submit button event
  $('#submitButton').on('click',submit)
}

// when the submit button is pressed...
function submit(){
  console.log('submit clicked!');
  // getter for all inputs
  first = $('#firstName').val();
  last = $('#lastName').val();
  id = $('#ID').val();
  title = $('#title').val();
  salary = $('#salary').val();
  // add inputs to table
  $('tbody').append(`
  <tr>
    <td>` + first +`</td>
    <td>` + last + `</td>
    <td>` + id + `</td>
    <td>` + title + `</td>
    <td>` + salary + `</td>
    <td>
      <button class='deleteButton'>Delete</button>
    </td>
  </tr>
  `)
};
