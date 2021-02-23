
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

let entries = JSON.parse(localStorage.getItem('events')) || []
entries.forEach(elem => {
  elem.push(input)
  entry.value = elem
})

document.addEventListener('click', event => {
    if(event.target.classList.contains('saveBtn')) {
      
      let entry = document.getElementsByClassName('description')
      for (let i=0; i<entry.length; i++) {
        let input = document.getElementsByClassName('description').value
        elem.push(input)
        localStorage.setItem('events', JSON.stringify(elem))
        entry.value = elem
      }

    }
})

