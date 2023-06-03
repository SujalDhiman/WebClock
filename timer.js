let grabHours=document.querySelector(".hours")
let grabMinutes=document.querySelector(".minutes")
let grabSeconds=document.querySelector(".seconds")
let ringAlarm=0

let audio1=new Audio("./alarm_tone.mp3")
grabHours.addEventListener("click",function ()
{
    const data=grabHours.innerText
    let inputBox=document.createElement("input")
    inputBox.setAttribute("id","inp")
    inputBox.setAttribute("type","number")
    inputBox.value=data
    grabHours.innerText=""
    grabHours.append(inputBox)
    inputBox.focus()
    inputBox.addEventListener("blur",function ()
    {
        grabHours.innerText=inputBox.value
        inputBox.remove()
    })
    ringAlarm=1
})
grabMinutes.addEventListener("click",function ()
{
    const data=grabMinutes.innerText
    let inputBox=document.createElement("input")
    inputBox.setAttribute("id","inp")
    inputBox.setAttribute("type","number")
    inputBox.value=data
    grabMinutes.innerText=""
    grabMinutes.append(inputBox)
    inputBox.focus()
    inputBox.addEventListener("blur",function ()
    {
        grabMinutes.innerText=inputBox.value
        inputBox.remove()
    })
    ringAlarm=1
})
grabSeconds.addEventListener("click",function ()
{
    const data=grabSeconds.innerText
    let inputBox=document.createElement("input")
    inputBox.setAttribute("id","inp")
    inputBox.setAttribute("type","number")
    inputBox.value=data
    grabSeconds.innerText=""
    grabSeconds.append(inputBox)
    inputBox.focus()
    inputBox.addEventListener("blur",function ()
    {
        grabSeconds.innerText=inputBox.value
        inputBox.remove()
    })
    ringAlarm=1
})


let startButton=document.querySelector(".start")
let pauseButton=document.querySelector(".stop")
startButton.addEventListener("click",startTimer)

let end=0
function startTimer()
{
    startButton.classList.add("remove")
    pauseButton.classList.remove("remove")
    if(parseInt(grabHours.innerText)>parseInt(23) || parseInt(grabMinutes.innerText)>parseInt(60) || parseInt(grabSeconds.innerText)>parseInt(60))
    {
    alert("Give Correct Values")
    }
    else
    {
        let sec=parseInt(grabSeconds.innerText)
        let min=parseInt(grabMinutes.innerText)
        let hrs=parseInt(grabHours.innerText)
        if(hrs === 0 && min === 0 && sec === 0 && ringAlarm!=0)
        {
            audio1.play()
            clearTimeout(end)
        }
        else
        {
            if(ringAlarm!=0)
            {
                if(sec !== 0)
                {
                    sec=sec-parseInt(1)
                }
                else
                {
                    sec=parseInt(59)
                    if(min === 0 && hrs !==0 )
                    {
                        hrs=hrs-parseInt(1)
                        min=parseInt(59)
                    }
                    else
                    {
                        min=min-parseInt(1)
                    }
                }
            }
        }

        grabHours.innerText=hrs.toString().padStart(2,'0')
        grabMinutes.innerText=min.toString().padStart(2,'0')
        grabSeconds.innerText=sec.toString().padStart(2,'0')
    }
    end=setTimeout(startTimer,1000)
}

let resetButton=document.querySelector(".reset")
resetButton.addEventListener("click",function ()
{
    grabHours.innerText="0".padStart(2,'0')
    grabMinutes.innerText="0".padStart(2,'0')
    grabSeconds.innerText="0".padStart(2,'0')
    audio1.pause()
})

pauseButton.addEventListener("click",function ()
{
    clearTimeout(end)
    audio1.pause()

    startButton.classList.remove("remove")
    pauseButton.classList.add("remove")
})
