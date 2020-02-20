/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let intTime = parseInt(time.slice(0, -3))

  if (intTime >= 0 && intTime <= 12){
    return "Good Morning"
  } else if (intTime >= 12 && intTime <= 17){
    return "Good Afternoon"
  } else{
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(str){
  document.getElementById("greeting").innerText = str
}