const numvalues = document.querySelectorAll(".num")
let interval = 5000;
numvalues.forEach((numvalue) => {
    let startValue = 0;
    let endValue = parseInt(numvalue.getAttribute("data-val"))
    let duration = Math.floor(interval / endValue)
    let counter = setInterval( () => {
        startValue+=1
        numvalue.textContent = startValue
        if (startValue == endValue){
            clearInterval(counter)
        }
    }, duration)
})