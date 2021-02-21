
// Current date
let time = moment().format('MMMM Do YYYY')
document.getElementById('currentDay').append(time)

// console.log(moment().set('hour',9))

// localStorage of time-block content
// let entry = JSON.parse(localStorage.getItem('events')) || []
// entry.forEach(entries => {
//   let eventElem = document.getElementsByClassName('description')
//   eventElem.textContent = document.getElementsByClassName('description').textContent

  // document.getElementsByClassName('description').append(eventElem)
// })

document.getElementsByClassName('description').value = localStorage.getItem('events')

document.addEventListener('click', event => {
    if(event.target.classList.contains('saveBtn')) {
      
      // let entries = document.getElementsByClassName('description')
      // for(let i=0; i<entries.length; i++) {
      //   let entryElem = ''
      //   entryElem += (entries[i].value)
      //   console.log(entryElem) 
      //   localStorage.setItem('events', entryElem)
      // }

    }
})

