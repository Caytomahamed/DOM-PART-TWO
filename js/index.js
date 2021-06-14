// Your code goes here
const headerContianer=document.querySelector("header")
const bodyContent=document.querySelector("body")
const logoHeading= document.querySelector('.logo-heading')

logoHeading.addEventListener("mouseover" , () => {
    logoHeading.style.transform = "translate(-100% , 0)"
    logoHeading.style.transition = "1.6s ease"
    logoHeading.style.opacity  = "0"

})

logoHeading.addEventListener("mouseleave" , () => {
    logoHeading.style.transform = "translate(0% , 0)"
    logoHeading.style.opacity  = "1"
})


const paraWheel =document.querySelector("footer p")

paraWheel.addEventListener("wheel" , () => {
    paraWheel.style.color ="red"
    paraWheel.style.fontWeight ="bold"
    paraWheel.style.fontSize ="20px"
})


document.createElement("h4")
const newElement = document.createElement("h4")
newElement.style.float = "right"
newElement.style.fontFamily = "sans-serif"
newElement.style.fontSize= "20px"
newElement.style.padding= "10px"
newElement.style.zIndex= "100"
newElement.style.margin = "0px 100px"


headerContianer.prepend(newElement)



window.addEventListener("resize", () => {
    newElement.textContent = "Resize" + "  "  + "  " + Math.random();
  });


window.addEventListener("load" , () => {
  alert("the page is  load")
})


const focusImg = document.querySelectorAll("body img")

focusImg.forEach(element => {
    element.addEventListener("focus" , () => {
    element.style.border = "10px solid red "
    })
});

const inputType = document.querySelector('input[type="text"]')
inputType.style.marginLeft ="700px"
inputType.addEventListener("focus" , () => {
    inputType.style.background = "red"
})

const sclor =document.querySelector(".destination")

sclor..addEventListener.("scroll" , ()=>{
    
})