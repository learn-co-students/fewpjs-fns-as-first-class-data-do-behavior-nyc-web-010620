/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time){
  let currTime = parseInt(time)
  if (currTime < 12){
    return "Good Morning"
  }else if(currTime>12 && currTime<17){
    return "Good Afternoon"
  }else{
    return "Good Evening"
  }
}

function displayMessage(message){
  let greetText = document.getElementById("greeting")
    greetText.innerText = message
}