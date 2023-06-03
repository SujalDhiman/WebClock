let weekDays=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]
let months=["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]
let hourSchedule=[]
let alarmAudio=new Audio("./alarm_tone.mp3")
let grabPause=document.querySelector(".snoozed")
let grabStop=document.querySelector(".stop")
function setCurrentDate()
{
    let date1=new Date()
    document.querySelector(".hrs").innerText=date1.getHours().toString().padStart(2,'0')
    document.querySelector(".min").innerText=date1.getMinutes().toString().padStart(2,'0')
    if(date1.getHours()>=12 && date1.getHours()<=23)
    {
        document.querySelector(".ampm").innerText="PM"
    }
    else
    {
        document.querySelector(".ampm").innerText="AM"
    }
    document.querySelector(".week").innerText=weekDays[date1.getDay()]
    document.querySelector(".date").innerText=date1.getDate().toString().padStart(2,'0')
    document.querySelector(".month").innerText=months[date1.getMonth()]
    setTimeout(setCurrentDate,1000)
}

setTimeout(setCurrentDate,1000)

function checkStorage()
{
    let date1=new Date()
    if(localStorage.getItem("Hours") !== null && localStorage.getItem("Minutes") !== null)
    {
        
        if(date1.getHours().toString().padStart(2,'0') === localStorage.getItem("Hours").padStart(2,'0') && date1.getMinutes().toString().padStart(2,'0') === localStorage.getItem("Minutes").padStart(2,'0') && date1.getDay().toString() === localStorage.getItem("DayofAlarm"))
        {
            alarmAudio.play()
        }
        else
        {
            console.log(date1.getHours().toString(), date1.getMinutes().toString() , date1.getDay().toString())
        }
    }
    setTimeout(checkStorage,1000)
}

checkStorage()


grabStop.addEventListener("click",function ()
{
    alarmAudio.pause()
    localStorage.clear()
    let deletename=document.querySelector(".addAlarms")
    if(!(deletename.classList.contains("remove")))
    deletename.classList.add("remove")
})

grabPause.addEventListener("click",function ()
{
    const value=parseInt(localStorage.getItem("SnoozingDelay"))
    const value1=parseInt(localStorage.getItem("Hours"))
    const newValue=Math.floor((parseInt(localStorage.getItem("Minutes"))+parseInt(value))/parseInt(60))
    const newValue1=Math.floor((parseInt(localStorage.getItem("Minutes"))+parseInt(value))%parseInt(60))
    localStorage.setItem("Hours",parseInt(value1)+parseInt(newValue))
    localStorage.setItem("Minutes",parseInt(newValue1))
    addingAlarm()
    alarmAudio.pause()
})


function addingAlarm()
{
    if(localStorage.getItem("Hours") !== null && localStorage.getItem("Minutes") !== null)
    {
        document.querySelector(".alarmTitle").innerText=localStorage.getItem("AlarmHeading").toUpperCase()
        document.querySelector(".hourTime").innerText=localStorage.getItem("Hours").padStart(2,'0')
        document.querySelector(".minTime").innerText=localStorage.getItem("Minutes").padStart(2,'0')
        if(parseInt(localStorage.getItem("Hours")) >=0 && parseInt(localStorage.getItem("Hours"))<=11)
        {
            document.querySelector(".ap").innerText="AM"
        }
        else
        {
            document.querySelector(".ap").innerText="PM"
        }
        let listitems=document.querySelectorAll("li")
        for(let lists of listitems)
        {
            if(lists.className.toString() === localStorage.getItem("DayofAlarm"))
            lists.style.color="#ADFF2F";
        }
        let deletename=document.querySelector(".addAlarms")
        if(deletename.classList.contains("remove"))
        deletename.classList.remove("remove")
    }
}
addingAlarm()
