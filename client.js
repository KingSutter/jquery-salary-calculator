// init global variables
let first = '';
let last = '';
let id = '';
let title = '';
let salary = '';
let salaries = []; // may not need. Try using .attr
let total = 0;
let test = '$56, blue 0 $ 00';
console.log(test.replace('$',''));
var myStr = 'this,is,a,te$st';
var newStr = myStr.replace(/[\$',']/g, '');

console.log( newStr );  // "this-is-a-test"

// on document ready...
$(document).ready(main)
function main(){
  // submit button event
  $('#submitButton').on('click',submit)
  // delete button event
  $('tbody').on('click','.deleteButton',onDeleteButtonClick);
}

// when the submit button is pressed...
function submit(){
  // getter for all inputs
  first = $('#firstName').val();
  last = $('#lastName').val();
  id = $('#ID').val();
  title = $('#title').val();
  salary = $('#salary').val().replace('$,', '');
  // add inputs to table
  $('tbody').append(`
  <tr>
    <td>` + first +`</td>
    <td>` + last + `</td>
    <td>` + id + `</td>
    <td>` + title + `</td>
    <td class='annualSalary'>` + salary + `</td>
    <td>
      <button class='deleteButton' id='` + salary + `'>Delete</button>
    </td>
  </tr>
  `)
};

function onDeleteButtonClick(){
  //delete row based on whatever button called the function using `this`
  total = $(this).attr('id'); // this is supposed to get the salary value - is bugged
  console.log($(this).closest ('tr').remove()); // closest goes up the tree and looks for `tr`
  console.log(total);
}
// function getTotal(){
  
// }