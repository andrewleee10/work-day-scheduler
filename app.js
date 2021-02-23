
// Current date
let time = moment().format('MMMM Do YYYY')
document.getElementById('currentDay').append(time)


// time-block color change based on time
// function to change the background color of text area based on hour of day
var colorChange = () => {
  let currentHour = moment().get('hour')
  console.log(currentHour)
  
  let hourText = document.getElementsByClassName('hour')
  let textColor = document.getElementsByClassName('description')
  for(let i=0; i<hourText.length; i++) {
    hourVal = parseInt(hourText[i].textContent)
    if(hourVal < 6) {
      hourVal = hourVal + 12
    }
    if (hourVal === currentHour) {
      textColor[i].classList.add('present')
    } else if (hourVal > currentHour) {
      textColor[i].classList.add('future')
    } else {
      textColor[i].classList.add('past')
    }
  }
}

colorChange()




// localStorage of time-block content

let elem = []
let textBox = document.getElementsByClassName('description')
let entry = textBox.value


let entries = JSON.parse(localStorage.getItem('events')) || []
for (let i = 0; i < textBox.length; i++) {
  textBox[i].value = localStorage.getItem('events')
}

document.addEventListener('click', event => {
    if(event.target.classList.contains('saveBtn')) {
      
      for (let i=0; i<textBox.length; i++) {
        let entryElem = textBox[i].value
        elem.push(entryElem)
        localStorage.setItem('events', JSON.stringify(elem))
      }

    }
})
