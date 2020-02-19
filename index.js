/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(string) {

  let hr = string.slice(0,2)
  if (string.length === 4) {
    return "Good Morning"
  } else if(hr < 12) {
    return "Good Morning"
  } else if (hr < 17) {
      return "Good Afternoon"
  } else {
      return "Good Evening"
  }
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function displayMessage(string) {

  let greeting = document.getElementById("greeting")
  greeting.innerText = string

}