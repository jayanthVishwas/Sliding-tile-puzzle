let boxDiv = document.createElement("div")
boxDiv.setAttribute("class","box")

let e1= createElement(1)
let e2= createElement(2)
let e3= createElement(3)
let e4= createElement(4)
let e5= createElement(5)
let e6= createElement(6)
let e7= createElement(7)
let e8= createElement(8)
let e9= createElement(9)
let e10= createElement(10)
let e11= createElement(11)
let e12= createElement(12)
let e13= createElement(13)
let e14= createElement(14)
let e15= createElement(15)

e12.addEventListener('click', function (event) {
    e12.setAttribute("class","temp elements")
 });



document.body.append(boxDiv)
boxDiv.append(e1,e2,e3,e4, e5,e6,e7,e8, e9,e10,e11,e12,e13,e14,e15)

function createElement(value){
  let temp =document.createElement("div")
  temp.setAttribute("class","elements")
  temp.innerHTML=value.toString()
  return temp
}
