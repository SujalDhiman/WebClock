const promiseOne=new Promise(function (resolve,reject)
{
    setTimeout(function ()
    {
        let ans=true
        if(ans)
        resolve("Establishing Connection")
        else
        reject("Not Established")
    },2000)
})

const promiseTwo=new Promise(function (resolve,reject)
{
    setTimeout(function ()
    {
        let ans=true
        if(ans)
        resolve("Fetching Data From Database")
        else
        reject("Connection Terminated")
    },3000)
})

const promiseThree=new Promise(function (resolve,reject)
{
    setTimeout(function ()
    {
        let ans=true
        if(ans)
        resolve("Fetched Data")
        else
        reject("Connection Terminated")
    },2000)
})


async function hello() {
    try {
      const result1 = await promiseOne;
      console.log(result1);
      const result2 = await promiseTwo;
      console.log(result2);
      const result3 = await promiseThree;
      console.log(result3);
    } catch (err) {
      console.log(err);
    }
  }
  
  hello();
  
