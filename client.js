// init global variables
let first = '';
let last = '';
let id = '';
let title = '';
let salary = '';
let salaryNum = 0;
let total = 0;
let monthlyTotal = 0;
let monthlyTotalString = '0';
let sub = 0; // for subtracting total

$(document).ready(main);
// on document ready...
function main(){
  // submit button event
  $('#submitButton').on('click',submit);
  // delete button event
  $('tbody').on('click','.deleteButton',onDeleteButtonClick);
  $('#total').text(monthlyTotalString);
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
  salaryNum = Number(salary.replace(/[\$',']/g, ''));
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
  `);
  // increase monthly salary total
  total += salaryNum;
  monthlyTotal = Math.round((total / 12) * 100) / 100; // round to second decimal
  monthlyTotalString = numberWithCommas(monthlyTotal);
  // setter for updated total monthly
  $('#total').text(monthlyTotalString);
  // reset inputs 
  first = $('#firstName').val('');
  last = $('#lastName').val('');
  id = $('#ID').val('');
  title = $('#title').val('');
  salary = $('#salary').val('');
  // if total is more than 20,000, add red background to total
  if (monthlyTotal > 20000) {
    $('p').css('background-color','red');
  }
  // change rows colors to alternate
  changeRowColors();
}

function onDeleteButtonClick(){
  // set sub to salary of deleted employee
  sub = Number($(this).attr('id'));
  //delete row based on whatever button called the function using `this`
  $(this).closest ('tr').remove(); // closest goes up the tree and looks for `tr`
  // change total value respectively
  total -= sub;
  monthlyTotal = Math.round((total / 12) * 100) / 100; // round to second decimal
  monthlyTotalString = numberWithCommas(monthlyTotal);
  // setter for updated total monthly
  $('#total').text(monthlyTotalString);
  // if total is less than or equal to 20,000, remove red background to total  
  if (monthlyTotal <= 20000) {
    $('p').css('background-color','white');
  }
  // change rows colors to alternate
  changeRowColors();
}

// will look into having each row color alternate
// this will work for now
function changeRowColors(){
  $("table tr:even").toggleClass("gray");
  $("table tr:odd").toggleClass("white");
  $("table tr:even").toggleClass("white");
  $("table tr:odd").toggleClass("gray");
  // header remains gray
  $("#header").removeClass("white");
  $("#header").toggleClass("gray");
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
} // from stackoverflow to add commas to number.
// Really just an asthetic change here
