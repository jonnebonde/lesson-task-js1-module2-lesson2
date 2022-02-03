const button = document.querySelector("button");
const number = document.querySelector(".count")

let count = 0;

button.onclick = function () {
    event.target.disabled = true;

    count = 0;

    const intervalId = setInterval(function(){
        count++;
        number.innerHTML = count;

        if(count === 7) {
            clearInterval(intervalId);
            button.disabled = false;
        }
    }, 1000);
   
};


// string length and trim


/* const animals = ["dog", "cat", "monkey"];

console.log(animals.length)

for(let i = 0; i < animals.length; i++) {
    
} */


const name = " Blob ";

const trimmedName = name.trim();

console.log(name.length); // With spaces
console.log(trimmedName.length); // without spaces on start and end of a string.



// addEventListener suits well for multiple functions


const myButton = document.querySelector(".btn");

function functionA() {
    console.log("AAAA");
}

function functionB() {
    console.log("BBBB");
}


/* myButton.onclick = functionA; */

myButton.addEventListener("click", functionA);
myButton.addEventListener("click", functionB);

