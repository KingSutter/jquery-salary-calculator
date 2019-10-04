// init global variables

// on document ready...
$(document).ready(main)
// set up setters/getters
function main(){
  $('#submitButton').on('click',submit)
}

function submit(){
  console.log('submit clicked!');
  
}