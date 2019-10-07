// init global variables
let first = '';
let last = '';
let id = '';
let title = '';
let salary = '';
let salaryNum = 0;
let total = 186000;
let sub = ''

// on document ready...
$(document).ready(main)
function main(){
  // submit button event
  $('#submitButton').on('click',submit)
  // delete button event
  $('tbody').on('click','.deleteButton',onDeleteButtonClick);
  $('#total').text(total);
}

// when the submit button is pressed...
function submit(){
  // getter for all inputs
  first = $('#firstName').val();
  last = $('#lastName').val();
  id = $('#ID').val();
  title = $('#title').val();
  salary = $('#salary').val();
  // this will strip salary of special characters
  salaryNum = Number(salary.replace(/[\$',']/g, ''))
  // add inputs to table
  $('tbody').append(`
  <tr>
    <td>` + first +`</td>
    <td>` + last + `</td>
    <td>` + id + `</td>
    <td>` + title + `</td>
    <td class='annualSalary'>` + salary + `</td>
    <td>
      <button class='deleteButton' id='` + salaryNum + `'>Delete</button>
    </td>
  </tr>
  `)
  // increase monthly salary total
  total += salaryNum;
  // setter for updated total monthly
  //$('#total').text(total);
  // reset inputs 
  first = $('#firstName').val('');
  last = $('#lastName').val('');
  id = $('#ID').val('');
  title = $('#title').val('');
  salary = $('#salary').val('');
};

function onDeleteButtonClick(){
  //delete row based on whatever button called the function using `this`
  sub = Number($(this).attr('id')); // this is supposed to get the salary value - is bugged
  $(this).closest ('tr').remove(); // closest goes up the tree and looks for `tr`
  total -= sub;
  console.log(total);
  // setter for updated total monthly
  //$('#total').text(total);
}