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
// set up setters/getters
function main(){
  // submit button event
  $('#submitButton').on('click',submit)
}

function submit(){
  console.log('submit clicked!');
  // getter for all inputs
  first = $('#firstName').val();
  last = $('#lastName').val();
  id = $('#ID').val();
  title = $('#title').val();
  salary = $('#salary').val();
}