// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
//get a random cell
//mole image appears in a random cell
//click on mole
//mole reappears in another cell

var cells = document.getElementsByTagName('td')

var randomIndex = Math.floor(Math.random() * cells.length)

var randomCell = cells[randomIndex]

var mole = document.createElement('img')

mole.src = './mole.PNG'

mole.id = 'mole'

randomCell.appendChild(mole)

mole.onclick = whackedMole

function whackedMole() {
  //   for (let i = 0; i < randomCell.length; i++) {
  //     randomCell[i].onclick = 'TD'
  randomIndex = Math.floor(Math.random() * cells.length)
  randomCell = cells[randomIndex]
  randomCell.appendChild(mole)

  var audio = new Audio('./whack-audio.wav')
  audio.play()
}
