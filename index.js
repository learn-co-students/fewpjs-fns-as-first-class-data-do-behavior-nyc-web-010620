/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))

}

function greet(timeString) {
  let number = parseInt(timeString)
  if (number <12) {
    return "Good Morning"
  } else if (number >17 ){
   return "Good Evening"
  } else
    return "Good Afternoon"
}

function displayMessage(string){
  document.getElementById('greeting').innerText = string
}

  
