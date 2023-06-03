let grabMinutes=document.querySelector(".minutes")
let grabSeconds=document.querySelector(".seconds")
let grabMilliSeconds=document.querySelector(".milliseconds")

let startButton=document.querySelector(".start")
let stopButton=document.querySelector(".stop")
let resetButton=document.querySelector(".reset")

let start=0
let count=0
let mins=0
let sec=0
startButton.addEventListener("click",startstopwatch)

function startstopwatch()
{
    count++
    if(count == 100)
    {
        count=0
        sec++
    }
    if(sec >= 60)
    {
        sec=0
        mins++
    }
    grabMinutes.innerText=mins.toString().padStart(2,'0')
    grabSeconds.innerText=sec.toString().padStart(2,'0')
    grabMilliSeconds.innerText=count.toString().padStart(2,'0')
    start=setTimeout(startstopwatch,10)
    startButton.disabled=true
    // stopButton.classList.remove("remove")
    // resetButton.classList.add("remove")
}


stopButton.addEventListener("click",function ()
{
    clearInterval(start)
    stopButton.classList.add("remove")
    resetButton.classList.remove("remove")
    startButton.disabled=false
})

resetButton.addEventListener("click",function ()
{
    count=0
    mins=0
    sec=0

    grabMinutes.innerText="00"
    grabSeconds.innerText="00"
    grabMilliSeconds.innerText="00"

    clearInterval(start)
    resetButton.classList.add("remove")
    stopButton.classList.remove("remove")
    
    startButton.disabled=false
})


