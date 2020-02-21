/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let parsedInt = parseInt(time)

  switch (true) {
    case parsedInt < 12:
      return 'Good Morning'
    case parsedInt >= 12 && parsedInt <= 17:
      return 'Good Afternoon'
    case parsedInt > 17:
      return 'Good Evening'
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let greeting = document.querySelector('#greeting')
  greeting.innerText = string
}
