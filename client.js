// init global variables
let salary = []; // may not need. Try using .attr
let total = 0;

// on document ready...
$(document).ready(main)
// set up setters/getters
function main(){
  $('#submitButton').on('click',submit)
}

function submit(){
  console.log('submit clicked!');
}