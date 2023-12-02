const timeout  = window.setTimeout(()=>{
    document.getElementsByTagName('h1')[0].innerHTML= 'Change in button request'
    console.log("Working after 2 seconds");
},2000)

document.getElementById("stop").addEventListener('click',function(){
    window.clearInterval(timeout);
    console.log(`Event is now stopped`);
})