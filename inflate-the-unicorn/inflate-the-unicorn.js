// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let unicorns = document.getElementsByClassName('inflate-an-image')

console.log(unicorns)

for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = clickunicorn
}

let unicorn0 = document.getElementById('unicorn0')
let unicorn1 = document.getElementById('unicorn1')
let unicorn2 = document.getElementById('unicorn2')

let imagenumber = 0
let imagenumber1 = 0
let imagenumber2 = 0
//make another 2 more imagenumber varaibles for other unicorn

function clickunicorn(e) {
  let unicorn = e.target
  if (unicorn.id == 'unicorn0') {
    imagenumber++
    unicorn.src = './images/unicorn-' + imagenumber + '.png'
    console.log(imagenumber)
    //if image num goes past 3  will need to reset 0
    if (imagenumber > 3) {
      console.log(imagenumber)
      imagenumber = 0
      unicorn.src = './images/unicorn-' + imagenumber + '.png'
      alert('Thank You!')
    }
  }
  if (unicorn.id == 'unicorn1') {
    imagenumber1++
    unicorn.src = './images/unicorn-' + imagenumber1 + '.png'
    //if image num goes past 3  will need to reset to image 0
  }
  if (imagenumber1 > 3) {
    console.log(imagenumber1)
    imagenumber1 = 0
    unicorn.src = './images/unicorn-' + imagenumber1 + '.png'
    alert('Thank You!')
  }
  if (unicorn.id == 'unicorn2') {
    imagenumber2++
    unicorn.src = './images/unicorn-' + imagenumber2 + '.png'
    //if image num goes past 3  will need to reset 0
    if (imagenumber2 > 3) {
      console.log(imagenumber2)
      imagenumber2 = 0
      unicorn.src = './images/unicorn-' + imagenumber2 + '.png'
      alert('Thank You!')
    }
  }
}

// function imgarr() {
//   //var imgarr = new Array()
//   console.log(imgarr)

//   // imgarr[0] = new Image()
//   // imgarr[0].src="./images"

//   // imgarr[1] = new Image()
//   // imgarr[1].src = './images/unicorn-1.png'

//   // imgarr[2] = new Image()
//   // imgarr[2].src = './images/unicorn-2.png'

//   // imgarr[3] = new Image()
//   // imgarr[3].src = './images/unicorn-3.png'
//   // if ((currentimg = lastimg)) {
//   //   currentpic = 0
//   //   var lastimg = images.length - 1
//   //   document.getElementById('img').src = images[currentpic]
//   // } else {
//   //   currentpic++
//   //   document.getElementById('img').src = images[currentpic]
//   }
//   imgarr()
//   console.log("I'm bring clicked!")
// }
