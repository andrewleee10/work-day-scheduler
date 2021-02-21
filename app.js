
// Current date
let time = moment().format('MMMM Do YYYY')
document.getElementById('currentDay').append(time)

// console.log(moment().set('hour',9))

// localStorage of time-block content
let entry = JSON.parse(localStorage.getItem('events')) || []
entry.forEach(entries => {
  let eventElem = document.getElementsByClassName('description')
  eventElem.textContent = document.getElementsByClassName('description').textContent

  // document.getElementsByClassName('description').append(eventElem)
})

document.addEventListener('click', event => {
    if(event.target.classList.contains('saveBtn')) {
      console.log('ping')

      let entries = document.getElementsByClassName('description').textContent

      entry.push(entries)
      localStorage.setItem('events', JSON.stringify(entry))

      console.log(localStorage.getItem('entry'))

      let eventElem = document.getElementsByClassName('description')
      eventElem.textContent = document.getElementsByClassName('description').textContent
      // document.getElementsByClassName('description').append(eventElem)
    }
})


// document.getElementsByClassName('saveBtn').addEventListener('click', event => {
//   if(event.target.className === 'saveBtn') {
//     let entries = document.getElementsByClassName('description').textContent

//     entry.push(entries)
//     localStorage.setItem('events', JSON.stringify(entry))

//     console.log(localStorage.getItem('entry'))

//     let eventElem = document.getElementsByClassName('description')
//     eventElem.textContent = document.getElementsByClassName('description').textContent
//     document.getElementsByClassName('description').append(eventElem)
//   }
// })