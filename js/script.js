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