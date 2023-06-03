let weekDays=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]
let months=["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]
function set1()
{
    let date1=new Date()
    document.querySelector(".week").innerText=`${weekDays[date1.getDay()]}, `
    document.querySelector(".date").innerText=`${date1.getDate()}  ${months[date1.getMonth()]}`
}
set1()
let currentWeek=[]
let totalAlarms=0
let grabHourUp=document.querySelector(".uphr")
let grabHourDown=document.querySelector(".dwnhr")
let hu=0
grabHourUp.addEventListener("click",function (e)
{
    increaseHours(e)
})
grabHourDown.addEventListener("click",function (e)
{
    increaseHours(e)
})


function increaseHours(e)
{
    if(e.target.classList.contains("uphr"))// Important
    {
        if(hu>=23)
        {
            hu=0
        }
        else
        {
            hu++
        }
    }
    else
    {
        if(hu<=0)
        {
            hu=23
        }
        else
        {
            hu--
        }
    }
    let grabdisplayHour=document.querySelector(".displayHour")
    grabdisplayHour.innerText=hu.toString().padStart(2,'0')
}


let grabMinuteUp=document.querySelector(".upmin")
let grabMinuteDown=document.querySelector(".dwnmin")
let mu=0
grabMinuteUp.addEventListener("click",function (e)
{
    increaseMinutes(e)
})
grabMinuteDown.addEventListener("click",function (e)
{
    increaseMinutes(e)
})


function increaseMinutes(e)
{
    if(e.target.classList.contains("upmin"))
    {
        if(mu>=59)
        {
            mu=0
        }
        else
        {
            mu++
        }
    }
    else
    {
        if(mu<=0)
        {
            mu=59
        }
        else
        {
            mu--
        }
    }
    let grabdisplayMin=document.querySelector(".displayMinutes")
    grabdisplayMin.innerText=mu.toString().padStart(2,'0')
}

let grabLists=document.querySelectorAll("li")
for(let keys of grabLists)
{
    keys.addEventListener("click",function (e)
    {
        confirmWeekSelect(e)
    })
}

function confirmWeekSelect(e)
{
    currentWeek=[]
    let list=document.querySelectorAll("li")
    for(let keys of list)
    {
        if(keys.classList.contains(`${e.target.className}`))//Imp Line
        {
            currentWeek.push(keys)
            keys.style.color="white"
        }
        else
        {
            keys.style.color="green"
        }
    }
}

const snoozeSelect=`input[name=snoozeTiming]:checked`
let grabSnooze=document.querySelector(".snooze")
let valueofsnooze=5
grabSnooze.addEventListener("click",function ()
{
    valueofsnooze=grabSnooze.querySelector(snoozeSelect).value
})


let grabStart=document.querySelector(".start")
grabStart.addEventListener("click",finalResult)


function finalResult()
{
    let grabAlarmHeading=document.querySelector("#alarmHeading")
    localStorage.setItem(`AlarmHeading`,grabAlarmHeading.value)
    localStorage.setItem(`DayofAlarm`,currentWeek[0].value)
    localStorage.setItem(`Hours`,document.querySelector(".displayHour").innerText)
    localStorage.setItem(`Minutes`,document.querySelector(".displayMinutes").innerText)
    localStorage.setItem(`SnoozingDelay`,valueofsnooze)
    totalAlarms=totalAlarms+1
    allClear()
}   

let grabCancel=document.querySelector(".cancel")
grabCancel.addEventListener("click",allClear)

function allClear()
{
    hu=0
    mu=0
    document.querySelector(".displayHour").innerText=00.toString().padStart(2,'0')
    document.querySelector(".displayMinutes").innerText=00.toString().padStart(2,'0')
    currentWeek[0].style.color="green"
    document.querySelector("#alarmHeading").value=""
    let radio=grabSnooze.querySelector(snoozeSelect)
    radio.checked=false
}



