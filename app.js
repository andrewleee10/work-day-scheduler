// Current date

let time = moment().format('MMMM Do YYYY')
document.getElementById('currentDay').append(time)

console.log(moment().set('hour',9)._d)