//select an object from HTML document
//document = HTML page
//queryselector = select something from the html page
document.querySelector("h1").innerText = "it works!"; 

//you can put the queryselector in a variable
let elementH1 = document.querySelector ("h1"); 

//To get something via the id
let elementDiv = document.querySelector("#div-id1")

//To get something via the class
let elementP = document.querySelector(".p-class1");

// get elementby id
let elementH2 = document.getElementById("h2-id1");

//get elements by class, to pick multiple elements by class
let elementH3 = document.getElementsByClassName ("h3-class1");
console.log(elementH3[2]); //vælg nummer i class

// to loop through elements, if you use get elements by class name. then you have to use from
Array.from(elementH3).forEach(element => {
    console.log(Element);
});

//the best way to do it - use queryselector! 
//laver en variabel med det hentede, og laver herefter en loop med funktion
let elementsH3TheNewWay = document.querySelectorAll(".h3-class1")
elementsH3TheNewWay.forEach(function(element){
    console.log(Element);
})

//By tagname
let elementsTagName = document.getElementsByTagName("p");
console.log(elementsTagName);

//hent knap fra html
let buttonId = document.querySelector("#button-id");
console.log(buttonId);

let buttonClass = document.querySelector(".button-class");
console.log(buttonClass);

//Events - eventlisteners - something will happen when you...
//Click
//Mouseover
//Keydown

//Put an event on the button
//Adding an eventlistener to a button
//You add the event, then an anonomys function (a function that has not been defined)
//A function inside another function as a parameter is a callback. this is a callback

//to get the body
let body = document.querySelector("body")
console.log(body);

//change background color of the body, when clicking
//if statement to remove the backgroundcolor when clicking again
buttonId.addEventListener("click", function(){
    
    if (body.classList.contains("bg-yellow")){
        body.classList.remove("bg-yellow")   
    } else {
        body.classList.add("bg-yellow") //hvis der bare skal tilføjes bg farve. 
    }
});

//mouse over event
buttonId.addEventListener("mouseover", function(){
    //alert("Lets do a mouseover")
    body.classList.add("bg-red")
})

// fjerner mouseover event
buttonId.addEventListener("mouseout", function(){
    body.classList.remove("bg-red")
})

//keydown event
// to make the input field red, until there has been typed a strong enough password, then green. 
let elementInput = document.querySelector("#password");
console.log(elementInput);

elementInput.addEventListener("keydown", function(){
   // console.log(elementInput.value)
   // console.log(elementInput.value.length);


    if(elementInput.value.length <=8){
         elementInput.classList.add("bg-red")
    } else {
        elementInput.classList.remove("bg-red")
        elementInput.classList.add("if-green")
    }
})


let arr = ["one", "Two", "Three"]
let html = "";

arr.forEach(function(el){
    html += `<button class='button-tag'> ${el}<button>`



let buttons = document.querySelectorAll(".button-tag");
buttons.forEach(function(button){
    alert(`im a button:b${button}`)
    })
})







