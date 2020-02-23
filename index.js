/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


function displayMessage(msg){
  document.getElementById("greeting").innerText = msg;
}

function greet(input){
  if(12 > parseInt(input.slice(0,3))){
    return "Good Morning"
  }
  else if(17 > parseInt(input.slice(0,3))){
    return "Good Afternoon"
  }
  else{
    return "Good Evening"
  }
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
