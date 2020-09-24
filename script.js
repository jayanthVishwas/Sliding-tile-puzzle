let boxDiv = document.createElement("div")
boxDiv.setAttribute("class", "box")

let e1 = createElement(1, "id1")
let e2 = createElement(2, "id2")
let e3 = createElement(3, "id3")
let e4 = createElement(4, "id4")
let e5 = createElement(5, "id5")
let e6 = createElement(6, "id6")
let e7 = createElement(7, "id7")
let e8 = createElement(8, "id8")
let e9 = createElement(9, "id9")
let e10 = createElement(10, "id10")
let e11 = createElement(11, "id11")
let e12 = createElement(12, "id12")
let e13 = createElement(13, "id13")
let e14 = createElement(14, "id14")
let e15 = createElement(15, "id15")
let e16 = createElement("", "blank")

let startBtn = document.createElement("button")
startBtn.setAttribute("id", "start-Btn")
startBtn.innerHTML = "Start"
startBtn.onclick = startGame


document.addEventListener("click", printMousePos);


document.body.append(boxDiv)
document.body.append(startBtn)
boxDiv.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16)

function createElement(value, id) {
  let temp = document.createElement("button")
  temp.setAttribute("class", "elements")
  temp.setAttribute("id", id)
  temp.innerHTML = value.toString()
  return temp
}



function printMousePos(event) {
  console.log("X: " + event.clientX + " Y: " + event.clientY)

  let target = document.getElementById(event.target.id)


  let blank = getBlankElement(target)
  // console.log(blank)

  if (blank !== null) {
    swapContent(target, blank)
  }

  if(isSolved()){
    alert("congratulations")
    return
  }

}

function getBlankElement(target) {
  let targX = target.getBoundingClientRect().x
  let targY = target.getBoundingClientRect().y

  let targetRight = document.elementFromPoint(targX + 120, targY)
  let targetLeft = document.elementFromPoint(targX - 20, targY)
  let targetUp = document.elementFromPoint(targX, targY - 20)
  let targetDown = document.elementFromPoint(targX, targY + 120)
  if (targetRight.innerHTML === "") return targetRight
  else if (targetLeft.innerHTML === "") return targetLeft
  else if (targetUp.innerHTML === "") return targetUp
  else if (targetDown.innerHTML === "") return targetDown
  else return null

}

function swapContent(target, blank) {
  let temp = target.innerHTML
  target.innerHTML = blank.innerHTML
  blank.innerHTML = temp

  console.log("swapping done")
}

function startGame() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ""]
  arr = shuffle(arr)
  console.log(arr)
  let bts = boxDiv.getElementsByTagName('button')
  console.log(bts)

  for (let i = 0; i < arr.length; i++) {
    bts[i].innerHTML = arr[i]
  }
}

function isSolved() {
  if (e1.innerHTML == 1 &&
    e2.innerHTML == 2 &&
    e3.innerHTML == 3 &&
    e4.innerHTML == 4 &&
    e5.innerHTML == 5 &&
    e6.innerHTML == 6 &&
    e7.innerHTML == 7 &&
    e8.innerHTML == 8 &&
    e9.innerHTML == 9 &&
    e10.innerHTML == 10 &&
    e11.innerHTML == 11 &&
    e12.innerHTML == 12 &&
    e13.innerHTML == 13 &&
    e14.innerHTML == 14 &&
    e15.innerHTML == 15 &&
    e16.innerHTML == "" )
    {
    console.log("solved")
    return true
  }

    else return false
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
