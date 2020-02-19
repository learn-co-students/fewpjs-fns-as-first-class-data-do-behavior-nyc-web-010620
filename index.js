/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

const greet = function(str){
  const nTime = parseInt(str); 
  if(nTime < 12){
    return "Good Morning"
  } else if(nTime > 12 && nTime < 17){
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

const displayMessage = function(str){
  document.getElementById("greeting").innerText = str 
}
