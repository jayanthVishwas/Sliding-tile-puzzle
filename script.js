let boxDiv = document.createElement("div")
boxDiv.setAttribute("class","box")

let e1= createElement(1,"id1")
let e2= createElement(2,"id2")
let e3= createElement(3,"id3")
let e4= createElement(4,"id4")
let e5= createElement(5,"id5")
let e6= createElement(6,"id6")
let e7= createElement(7,"id7")
let e8= createElement(8,"id8")
let e9= createElement(9,"id9")
let e10= createElement(10,"id10")
let e11= createElement(11,"id11")
let e12= createElement(12,"id12")
let e13= createElement(13,"id13")
let e14= createElement(14,"id14")
let e15= createElement(15,"id15")
let blank = createElement("","blank")

document.addEventListener("click", printMousePos);


document.body.append(boxDiv)
boxDiv.append(e1,e2,e3,e4, e5,e6,e7,e8, e9,e10,e11,e12,e13,e14,e15,blank)

function createElement(value,id){
  let temp =document.createElement("button")
  temp.setAttribute("id",id)
  temp.innerHTML=value.toString()
  return temp
}



function printMousePos(event) {
  console.log("X: " + event.clientX +" Y: " + event.clientY)

  let target = document.getElementById(event.target.id)
  let targX = target.getBoundingClientRect().x
  let targY = target.getBoundingClientRect().y

  let blank = getBlankElement(target)
  console.log(blank)

  if(blank!==null){
    swapContent(target,blank)
  }

}

function getBlankElement(target){
  let targX = target.getBoundingClientRect().x
  let targY = target.getBoundingClientRect().y

  let targetRight = document.elementFromPoint(targX+120,targY)
  let targetLeft = document.elementFromPoint(targX-20,targY)
  let targetUp = document.elementFromPoint(targX,targY-20)
  let targetDown = document.elementFromPoint(targX,targY+120)
  if(targetRight.innerHTML==="") return targetRight
  else if(targetLeft.innerHTML==="") return targetLeft
  else if(targetUp.innerHTML==="") return targetUp
  else if(targetDown.innerHTML==="") return targetDown
  else return null

}

function swapContent(target,blank){
  let temp = target.innerHTML
  target.innerHTML=blank.innerHTML
  blank.innerHTML=temp

  console.log("swapping done")
}
